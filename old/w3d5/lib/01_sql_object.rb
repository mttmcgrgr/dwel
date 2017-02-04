
require_relative 'db_connection'
require 'active_support/inflector'
require 'byebug'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
   def self.columns
    @cols ||= DBConnection::execute2(<<-SQL).first
      SELECT
        *
      FROM
        "#{self.table_name}"
      LIMIT
        1
      SQL
    @cols.map(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |name|
      define_method(name) do
        attributes[name]
      end

      define_method("#{name}=") do |value|
        attributes[name] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name || self.name.tableize
  end

  def self.all
    results = DBConnection::execute(<<-SQL)
      SELECT
        *
      FROM
        "#{self.table_name}"
    SQL
    parse_all(results)
  end

  def self.parse_all(results)
    results.map { |result| self.new(result) }
  end

  def self.find(id)
    results = DBConnection::execute(<<-SQL, id)
      SELECT
        *
      FROM
        "#{table_name}"
      WHERE
        "#{table_name}".id = ?
    SQL

    parse_all(results).first
  end

  def initialize(params = {})
    params.each do |attr_name, value|
      attr_name = attr_name.to_sym
      if self.class.columns.include?(attr_name)
        self.send("#{attr_name}=", value)
      else
        raise "unknown attribute '#{attr_name}'"
      end
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    cols = self.class.columns
    cols.map {|attr| self.send(attr) }
  end

  def insert
    columns = self.class.columns.drop(1)
    col_names = columns.map(&:to_s).join(", ")
    question_marks = (["?"]*columns.count).join(", ")
    results = DBConnection::execute(<<-SQL, *attribute_values.drop(1))
    INSERT INTO
      #{self.class.table_name} (#{col_names})
    VALUES
      (#{question_marks})
    SQL
    self.id = DBConnection.last_insert_row_id
  end

  def update
    set_lines = self.class.columns.map { |c| "#{c} = ?" }.join(", ")
    results = DBConnection::execute(<<-SQL, *attribute_values, id)
      UPDATE
        #{self.class.table_name}
      SET
        #{set_lines}
      WHERE
        #{self.class.table_name}.id = ?
    SQL
  end

  def save
    if id.nil?
      insert
    else
      update
    end
  end
end
