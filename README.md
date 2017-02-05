#Dwel

Dwel is an IOS app proving an intuitive communications platform between landlords and tenants.  It allows tenants to post todo items that a landlord can reference and ultimately resolve. It is built using Ruby on Rails on the backend, a PostgresSQL database, and React framework on the frontend.

##Features and Implementation

###Groups
![image of group_index]()
On the back-end, groups are stored with the tenant address and a group key that can be shared with others that want to be added to the group.  Groups are created by the first group member to register for Dwel and a key is provided.  Once the key is submitted by the next registered member of the group, both members are given access to the group dashboard.  Users can browse all their group subscriptions in a group index following login.  Group member affiliation is stored in a Memberships table in the database.  

####Todos

![image of todos]()
Todos are created by tenants in need of services from their landlord such as maintenance, extermination, etc.  Front-end validation restricts landlord from creating todos and tenants from marking todos as resolved.  Todos are stored in the database with columns for description, body, group_id, and a boolean for whether or not the todo is resolved.  a group's todos are indexed and created on the group dashboard

###Comments

![image of comments]()
Members of a group, including the landlord and tenants, can post comments on any resolved or unresolved todo associated with that group.  Comments are stored in the database with a body, todo_id, and user_id and can be viewed and created on the todo show page.  
