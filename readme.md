## Dwel

### Background

Communication between landlord and tenant can stressful and hard to keep records of. Dwel is a single-page mobile app that connects landlord and tenants by providing a property profile where tenants can request repairs and pay rent.

The tenant can add a repair task, by providing a description of the repair and photos for more detail.  After the task has been approved by the landlord it can’t be deleted to help keep track of the repair history. Each task has a comments section where landlord and tenants can chat about the details. After a task has been completed, it gets checked off by the landlord but stays in the property profile.

Dwel makes paying rent easy by using Venmo’s API the tenant can send money by using the landlord’s phone number or username.


### Functionality & MVP

With this app, users will be able to:

- [ ] log in using fingerprint ID (landlords and tenants)
- [ ] send messages and create message threads (tenants and landlords)
- [ ] Create to-dos with applicable info (tenants)
- [ ] Respond to to-do items and mark as done (landlord)
- [ ] View message and todo history for each property (landlords and tenants)
- [ ] View messages, todos and tenants by property (landlord)

Bonus features:

- [ ] Venmo payments using Venmo API (tenants and landlords)


### Wireframes

![property_page](wireframes/property.jpg)

### Technologies & Technical Challenges

This app will be implemented using the following technology: React Native, Google API (fingerprint auth),
JavaScript, HTML and CSS.

The app will make use of the following components:

- Session (login / signup)
  - Tenant_form
  - Landlord_form

- Landlord_home (landlord home page)
  - Property_form
  - Property_index

- Property_index_item (tenants home page)
  - Messages_form
  - Todos_form (for tenants)
  - Tenants_index
    - Tenants_index_item
  - Todos_index
    - Todos_index_item
      - Todo_messages (keeps record)
  - Messages_index
    - Messages_index_item


Technical challenges will include implementing Google API for fingerprint
auth and initial association between landlord and tenant via a unique key
given to landlord upon signup.


### Group Members & Work Breakdown

Our group consists of three members, Matt McGregor, Victor Guillen and Aron Cutler.  

Matt's primary responsibilities will be:

- Setting up back-end and front-end user authentication.
- Designing backend architecture to differentiate between landlord and tenant users.
- Creating sign up and login form component for landlords and tenants
- Creating the display page & marketing the app
- Writing the authentication aspects of repo's README, complete with screenshots and code snippets  

Victor's primary responsibilites will be:

- Setting up back-end messaging functionality.
- Building message index, index item, and form components.  
- Styling all message components.  
- Writing the messaging aspects of the repo's README, complete with screenshots and code snippets
- Creating the display page & marketing the app

Aron's primary responsibilites will be:

- Setting up backend to-do functionality.  
- Building todo index, index item, and form components.  
- Styling all todo components.  
- Writing the todo aspects of the repo's README, complete with screenshots and code snippets
- Creating the display page & marketing the app

### Implementation Timeline

**Day 1**:
- Get familiar with Google API and React Native (all)
- Begin auth and backend setup with user, message, todo and property tables (Matt)
- Read Venmo's API documentation. Comeplete tutorial on sending money. (Victor)
- Build rails backend for todos, including migrations, model, controller, and JBuilder views (Aron)

**Day 2**:
-  Auth forms for user type (tenants vs landlords) and create SecureRandom code for landlords
   to share with tenants (Matt)
- Create Schema, Model, Routes, Controller, Jbuilder View and AJAX Util for Comments. (Victor)
- Learn React Native and construct todos api util functions, actions, reducer, and container(Aron)


**Day 3**:
-  Finish Auth and work on form emails sent to tenants by landlord via signup page(Matt)
- Create Actions, Reducer, Container and Presentational component for Comments (Victor)
- Build todosIndex, todosIndexitem, and todosForm components (Aron)

**Day 4**:
-  Work on styling of auth forms (Matt)
- Integrate Venmo API (Victor)
- Style all todo components all collaborate with Victor and Matt on splash page and session form styling (Aron)


**Day 5**:
- assist on any loose ends and work on production readme / marketing (Matt)
- Style App (Victor)
- Integrate todos into history page and write todos portion of Production README (Aron)

### Plan for getting users and reviews
- links to app page will be posted on relevant subreddits and message boards
- All members will share app with landlords and tenants
- App will be submitted to the Apple App Store  
