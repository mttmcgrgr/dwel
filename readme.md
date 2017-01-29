## Dwel

### Background

Keeping in touch with your landlord or tenants is important and can be


### Functionality & MVP

With this extension, users will be able to:

- [ ] Tenants can send messages to their landlord and
- [ ] Tenants can create to-dos for their landlord
- [ ] Landlords can message their tenants and check off user created to-dos
- [ ] Tenants and Landlords can review history of to-dos and messages


### Wireframes



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

**Day 2**:
-  Auth forms for user type (tenants vs landlords) and create SecureRandom code for landlords
   to share with tenants (Matt)


**Day 3**:
-  Finish Auth and work on form emails sent to tenants by landlord via signup page(Matt)

**Day 4**:
-  Work on styling of auth forms


**Day 5**:
- assist on any loose ends and work on production readme / marketing

### Plan for getting users and reviews
- links to app page will be posted on relevant subreddits and message boards
- All members will share app with landlords and tenants
- App will be submitted to the Apple App Store  
