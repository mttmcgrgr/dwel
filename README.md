#Dwel
[Front-end Github][github]
[github]: https://github.com/mttmcgrgr/dwel

[Back-end Github][github]
[github]: https://github.com/AaronwithoneA/dwel_backend

Dwel is an IOS app proving an intuitive communications platform between landlords and tenants.  It allows tenants to post todo items that a landlord can reference and ultimately resolve. It is built using Ruby on Rails on the backend, a PostgresSQL database, and React framework on the frontend.

##Features and Implementation

###Authentication and adding Groups

On entering the app, a user signs up by inputing their credentials and submits the form by answering a question "Are you a landlord?" a "Yes" will give the user the ability to
create mark to-dos as done. The second stage is to join a pre-existing group with a user provided key code or to create a new group. If the group is new, a user simply inputs an address, which becomes the title of the group and a key code is implicitly passed to the group through use of a key code generator.

<img src="https://github.com/mttmcgrgr/dwel/blob/master/docs/images/create_account.png" width="300">

<img src="https://github.com/mttmcgrgr/dwel/blob/master/docs/images/create_group.png" width="300">

###Groups

On the back-end, groups are stored with the tenant address and a group key that can be shared with others that want to be added to the group.  Groups are created by the first group member to register for Dwel and a key is provided.  Once the key is submitted by the next registered member of the group, both members are given access to the group dashboard.  Users can browse all their group subscriptions in a group index following login.  Group member affiliation is stored in a Memberships table in the database.  

<img src="https://github.com/mttmcgrgr/dwel/blob/master/docs/images/groups_index.png" width="300">

When users first create a group, a post request is made to the database with an user input address and a computer generated key-code.  

```
fetchGroup () {
  fetch('http://dwel.herokuapp.com/groups', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({group: {
      address: this.state.address,
      token: this.keyGenerator()
    }})
  })
}

createNewGroup(){
 this.fetchGroup()
 .then((response) => response.json())
 .then(response => {
   if (response.length > 0) {
     this.setState({
     groups: response
    });
   } else {
     this.setState({
       errors: response[0]
     });
   }
 });
 setTimeout(this._goToGroupIndex, 500);
}
```

####Todos

<img src="https://github.com/mttmcgrgr/dwel/blob/master/docs/images/todos_form.png" width="300">

Todos are created by tenants in need of services from their landlord such as maintenance, extermination, etc.  Front-end validation restricts landlord from creating todos and tenants from marking todos as resolved.  Todos are stored in the database with columns for description, body, group_id, and a boolean for whether or not the todo is resolved.  a group's todos are indexed and created on the group dashboard

###Comments


Members of a group, including the landlord and tenants, can post comments on any resolved or unresolved todo associated with that group.  Comments are stored in the database with a body, todo_id, and user_id and can be viewed and created on the todo show page.  
