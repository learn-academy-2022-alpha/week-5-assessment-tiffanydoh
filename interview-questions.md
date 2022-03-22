# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a block in Ruby?

  Your answer: A block in Ruby is the keyword do/end. It allows for a block of code to be executed inside of a Ruby method. Blocks can take multiple parameters, for example, value and index. These parameters are passed through the pipes | |. 

  Researched answer: Blocks in Ruby are anonymous functions passed into a Ruby method. Blocks can either be used with do/end where multiple lines are needed for code or curly braces {} where code is a single line. Blocks allows us to be DRY. 



2. What is a gem?

  Your answer: Gem is a Ruby library that allows us to reuse code and share code with other developers. RSpec is an example where we would install Ruby gems. The command for that is gem install rspec. 

  Researched answer: Gem in Rails allows developers to add functionalities without writing code. RSpec gem needs ruby gems installed. RSpec is essentially a Ruby testing framework thats used for Test Driven Development. 



3. What is Ruby on Rails?

  Your answer: Ruby on Rails is a backend web application framework that uses the language Ruby. It is an open sourced framework. Rails is very particular in how it wants its information. It's the Rails way or no way. 

  Researched answer: A server-side web application framwork using Ruby language. Rails is considered a model-view-controller (MVC) framework, and with Ruby on Rails it takes on this MVC architectural pattern where each responsibility of the web app is divided up into those MVC parts.



4. What is a relational database? Are there other kinds of databases?

  Your answer: When I think of relational database, I think about the rows and columns on a table and how they are related and connected to each other.

  Researched answer: Relational database is similar to Excel sheet where there are tables made up of rows and columns. A database can have a number of tables have relationships/connections to each other. It can also just be as simple as any stored items of information having relations to one another. Relational Database uses a schema to define the name and data type of each column in a table.



5. What are primary keys? Why are they important?

  Your answer: Primary Key is a unique identifier for a row. Every row has a primary key. For example, if we had two names that are the same, we would be able to distinguish the two by looking at the primary key. 

  Researched answer: A primary key allows for each row to be unique and different from other parts of the program. Each row is assigned a primary key where it can be referenced. It prevents issues where there could be two instances of the same thing. It can be considered as a special relational database column.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representational State Transfer. By using RESTful routing, it allows us to map HTTP verbs (Get, Post, Patch, Delete) with CRUD actions (Create, Read, Update, Destroy) where it would work in a pattern. RESTful routes make it easier for users to navigate through clean, consistent URL paths. 

2. JSON: JSON stands for JavaScript Object Notation. JSON uses Javascript language specifically object syntax to represent structured data. JSON is most commonly used for transmitting data in web applications.  

3. ERB: ERB stands for Embedded Ruby. ERB is a Ruby templating system. It allows for actual Ruby code to be used with plain text documents such as HTML.

4. Params: Params in Rails are the parameters being passed into the controller using the Get and Post request. A param in Get request comes from the user's browser and gets passed to the controller. Whereas in a Post request, params will be passed from the form to the controller.

5. API: API stands for Application Programming Interface. It is basically acting as the middleman to allow two applications to communicate to each other. It allows for data transmission between the two applications. For example, when checking the weather on you phone, you are using an API. 
