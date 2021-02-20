---
title: 'An easy and practical approach to structuring Golang applications'
excerpt: ''
coverImage: '/assets/blog/hello-world/cover.jpg'
posted: '30-01-2021'
author:
  name: Morten Vistisen
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

![https://cdn-images-1.medium.com/max/1600/1*oZ1j-s22SCUMZamIyVeQtQ.jpeg](https://cdn-images-1.medium.com/max/1600/1*oZ1j-s22SCUMZamIyVeQtQ.jpeg)

Go is an amazing language. It’s simple, easy to reason about and gives you much tooling right out of the box. However, when I started with Go I struggled to figure out how to structure my applications in a way that didn’t use “enterprisey” approaches. This is my take on structuring Golang applications that start out simple, but with the flexibility to grow, and what I would have wanted when I started with Go.

### Disclaimer

This article is based on the following people (link to their Twitter): [Mat Ryer,](https://twitter.com/matryer) [Kat Zien](https://twitter.com/kasiazien), [Jon Calhoun](https://twitter.com/joncalhoun) and [Robert C. Martin](https://twitter.com/unclebobmartin).

All of the above-mentioned people have articles and tutorials that are amazing on their own, which you should definitely checkout.

If you just want to see the code for this article’s project, check out the [Github repository](https://github.com/MBvisti/weight-tracker-article).

### Project & tools

It is always frustrating to learn a new language and having to create the same to-do app over and over again. So we are going to make an application that allows people to create an account, where they can track their weight and calculate their nutritional requirements (inspired by weight increase during lockdown). Feel free to add to this application with features you see fit.

Now, I’m assuming some familiarity with Golang and programming in general, as this is a practical example of how to structure a Go application. We will be using the following:

- Gin Web Framework
- Go version 1.15+
- Postgresql
- Golang-migrate
- Your favorite IDE (could be Goland or VS code — I highly suggest Goland, it’s amazing)

### Elements of a robust and scalable structure

Spend some time working in software development and you quickly learn how programs sometimes can be brittle and other times rigid. Therefore, I look for these three things in my application structure:

- Testability
- Readability
- Adaptability

Writing programs in a way that also makes it easy to write tests dramatically affect developer productivity. Along with readability, it not only makes it easier for you to maintain and improve old code. You also make it easier for new people to add to the project as they can feel somewhat safe when changing or adding code as you already have test in place. Lastly, having adaptability means your project can adapt to changing needs and complexity.

Starting out as simple as possible have the advantage of you being able to quickly iterate on new ideas getting to the actual problem solving right from the get-go. Most developers don’t need to think about domain-driven development when starting new projects, and it would probably be a waste of time in most cases (unless, of course, you are working in Big Co. but then why would you be reading an article for beginner Go developers).

The tutorial is split into three parts:

- The application structure
- User Service implementation
- TDD implementation of Weight Service

This should hopefully give you an overview of the overall structure, a step-by-step guide on how to add a service and finally how easy it is to write test and develop with TDD.

### The application structure

Alright, enough talk, let’s go going. Create a new folder wherever you like to store your projects called `weight-tracker` and run the following command inside the folder:

<code>
go mod init weight-tracker
</code>

The application is going to follow a structure that looks something like this:

```
weight-tracker
- cmd
  - server
    main.go
- pkg
  - api
    user.go
    weight.go
  - app
    server.go
    handlers.go
    routes.go
  - repository
    storage.go
```

Go ahead and create the above structure in your designated folder.

Most go projects seem to be following a convention of having a `cmd` and a `pkg` directory. The `cmd` will be the entry point into the program and gives you the flexibility to interact with the program in several ways. The `pkg` directory will contain everything else: routes, database interactions, services etc.

We will be working with four packages:

- main
- api
- app
- repository

The `main` package should be self-explanatory if you’ve ever done any golang programming before. All of our services, i.e. `user` and `weight` service, are going into the `api` package along with a `definitions` file that will contain all of our structs (we will create this later). In the `app` package, we will have our `server`, `handlers` and `routes.` Lastly, we have `repository` that will contain all of our code related to database operations.

Open up `main.go` and add the following:

<script src="https://gist.github.com/MBvisti/07075587d231d562d03d0604a601b003.js"></script>

You should have quite a few errors showing in your IDE now, we are fixing that in a moment. But first off, let me explain what is going on here. In our `func main()`we call a method named `run`, that returns an error (or nil, if there is no error). If `run` should return an error our programs exits and gives us an error message. Setting up our `main` function in this way allows us to test it and thereby following the element of a robust service structure, testability. This way of setting up the main function comes from Mat Ryer, who talks more about it in his [blog post](https://pace.dev/blog/2020/02/12/why-you-shouldnt-use-func-main-in-golang-by-mat-ryer.html).

The next two topics we need to discuss are **Clean Architecture** and **Dependency Injection**. You might have heard about Clean Architecture under a different name, as a few people wrote about it around the same time. The majority of my inspiration comes from [Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) so this is who I will be referencing.

We are not going to be religiously following Clean Architecture but mainly adopt the idea of The Dependency Rule. Take a look at the below picture:

![https://cdn-images-1.medium.com/max/1600/1*_5WeMzRt5aCVxXNWLlxAJw.png](https://cdn-images-1.medium.com/max/1600/1*_5WeMzRt5aCVxXNWLlxAJw.png)

Source: Robert C. Martin’s blog — Clean Coder Blog

A quote from Robert Martin’s article helps define this rule:

> This rule says that source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle.

In rough terms, the inner layers should not know about the outer layers. This allows us to practically change the database we use. Say we are changing from PostgreSQL to MySQL or exposing our API through gRPC instead of HTTP. You would most likely never do this but it does speak for the adaptability of this concept.

To achieve this, we are going to use dependency injection (DI for short). Basically, DI is the idea that services should receive their dependencies when they are created. It allows us to decouple the creation of a service’s dependencies from the creation of the service itself. This will be helpful when we get to testing our code. If you want to read more about DI, I suggest this [article](https://blog.drewolson.org/dependency-injection-in-go).

I learn best by looking at actual code, so let’s start by adding some of the missing code that will make the code in `main.go` make more sense. Open up `storage.go` and add the following:

<!-- <script src="[https://gist.github.com/MBvisti/d43af7b83aef66bb8eee1b839c224e1c.js](https://gist.github.com/MBvisti/d43af7b83aef66bb8eee1b839c224e1c.js)"></script> -->

This allows us to create a new storage component where and whenever we want, as long as it receives a valid db argument of type `*sql.DB`.

As you may have noticed, we have a lowercase and an uppercase version of `storage`, one is a struct and one is an interface. We will define any methods (like CRUD operations) on the lowercase version of storage and define the methods in the uppercase version. By doing so, we can now easily mock out `storage` for unit testing. Also, we now get some nice suggestions from our IDE when we add methods to the storage interface when we haven’t implemented the methods.

Now, lets set up the base structure of one of our services, `user.go`. This should give you a feel for how the API package is going to be structuring services. You will have to repeat this for the `weight.go` service as well. Just copy-paste the content of `user.go`and change the naming. Open up `user.go` and add the following:

<!-- <script src="[https://gist.github.com/MBvisti/0ec808be6e940776f1bad7ade29cdeee.js](https://gist.github.com/MBvisti/0ec808be6e940776f1bad7ade29cdeee.js)"></script> -->

Notice that our user service have a repository dependency. We will define repository methods (i.e. database operations) here later on, but the important part is that we only define the methods we need. Since we are not interested in the implementation of these methods, only the behaviour, we can write mock functions that suit a given test case.

This might seem a bit fluffy right now but bear with me for now, it will make sense later on. Let’s get a running application that we can add actual logic to the services.

Open up `server.go` and add the following:

<!-- <script src="[https://gist.github.com/MBvisti/958f0397b070506f6b475620b8719d0c.js](https://gist.github.com/MBvisti/958f0397b070506f6b475620b8719d0c.js)"></script> -->

Next, open `routes.go` and add the following:

<!-- <script src="[https://gist.github.com/MBvisti/3e806d3527b8a77008db5f907815dc6e.js](https://gist.github.com/MBvisti/3e806d3527b8a77008db5f907815dc6e.js)"></script> -->

We are going to take advantage of gin’s group functionality so we can easily group our endpoints after the resources they intend to serve. Next up, let’s add a handler so we can actually make calls to the status endpoint and verify that our application is running. Open up `handlers.go`:

<!-- <script src="[https://gist.github.com/MBvisti/25d626b92db229ed160a8c20b77edb2c.js](https://gist.github.com/MBvisti/25d626b92db229ed160a8c20b77edb2c.js)"></script> -->

At this point, we only need to sync a few dependencies: Gin Web Framework and a driver for PostgreSQL. Go ahead and type the following into your terminal: `go get github.com/gin-contrib/cors` , `go get github.com/gin-gonic/gin`and `go get github.com/lib/pg`.

Everything should be ready now, so go into your terminal and write: `go run cmd/server/main.go`, visit `http://localhost:8080/v1/api/status`, and you should receive a message along the lines of:

<!-- <script src="[https://gist.github.com/MBvisti/dd369897e7d7dee65c10ef351d588937.js](https://gist.github.com/MBvisti/dd369897e7d7dee65c10ef351d588937.js)"></script> -->

If you don’t get the above message, please go back to the previous steps and see if you missed something or checkout the accompanying [GitHub repository](https://github.com/MBvisti/weight-tracker-article).

### User Service implementation

At this point, we are ready to start building the meat of the application. To do so, we probably need to set up a database with tables and relations. To do this, we are going to use the library `[golang-migrate](https://github.com/golang-migrate/migrate/)`. I personally like this library as it has a CLI tool to add migrations which enables me to do things like adding Makefile commands to create migrations. I encourage you to give the library’s documentation a look, it is an amazing project.

I won’t cover how to set this up as the article would be too long. For now, go into your terminal, make sure you are in the `repository` folder and run:

<!-- ```
git clone https://gist.github.com/ed090d782dc6ebb35e344ff82aafdddf.git
``` -->

This clones the migrations needed for the project. You should also now have a folder named `ed090d782dc6ebb35e344ff82aafdddf`, ****lets change that to migrations by running:

<!-- ```
mv ed090d782dc6ebb35e344ff82aafdddf migrations
``` -->

The last thing we need now is to add the `RunMigrations` method to `storage.go`:

To run the migrations, open up `main.go` and add the following:

<!-- [https://gist.github.com/MBvisti/0389a7ba8112a3a165d58ead1377a10f](https://gist.github.com/MBvisti/0389a7ba8112a3a165d58ead1377a10f) -->

You should now have two tables in your database: user and weight. Let’s get started on writing some actual business logic.

We want to let people create an account through our API. So let’s started by defining what a user request is, create a file called under the API folder `definitions.go` and add the following:

<!-- <script src="[https://gist.github.com/MBvisti/9b0f546fac1984d70eb39d9a334ae536.js](https://gist.github.com/MBvisti/9b0f546fac1984d70eb39d9a334ae536.js)"></script> -->

We are defining what a new user request should look like. Note that this might be different from what a user struct would look like, we define our struct to only include the data we need. Next up, open `user.go` and the following to `UserService` and `UserRepository`:

<!-- <script src="[https://gist.github.com/MBvisti/df315095ed0c490dcfc59aa5cd269ad8.js](https://gist.github.com/MBvisti/df315095ed0c490dcfc59aa5cd269ad8.js)"></script> -->

Here we define a method on our `UserService`, called `New` and a method on the UserRepository called `CreateUser`. Remember we talked about The Dependency Rule earlier? This is what’s going on with the `CreateUser` method on `UserRepository`, our service does not know about the actual implementation of the method, what type of database it is etc. Just that there is a method called `CreateUser` and takes in a `NewUserRequest` and returns an error. The benefit of this is twofold: we get some indication from our IDE that a method is missing (open up `main.go` and check `api.NewUserService`) and what it needs, and it allows us to easily write unit tests. You should also see an error from `NewUserService`in `user.go`, telling us that we are missing a method. Let’s fixed that, add the following:

<!-- <script src="[https://gist.github.com/MBvisti/2d15ecccd61e4018785035ef286b1986.js](https://gist.github.com/MBvisti/2d15ecccd61e4018785035ef286b1986.js)"></script> -->

We do some basic validations and normalisation, but this method could definitely be improved upon. We still need to add the `CreateUser` method, so open up `storage.go` and add the following to the `CreateUser` method to the `Storage` interface:

<!-- <script src="[https://gist.github.com/MBvisti/db88fce8abcb68758c511eb002252811.js](https://gist.github.com/MBvisti/db88fce8abcb68758c511eb002252811.js)"></script> -->

Notice that this makes the error in `main.go` go away, but results in a new error on the `NewStorage` function. We need to implement the method, just like we did with the `UserService`. Add this below `RunMigrations`:

<!-- <script src="[https://gist.github.com/MBvisti/4dedf7fc3cbf417966d7e7337fbd51c3.js](https://gist.github.com/MBvisti/4dedf7fc3cbf417966d7e7337fbd51c3.js)"></script> -->

Again, this code could probably do with some improvements, but I’m going to keep it short.

Now, all that is left to do is to expose this through HTTP so that people can actually start using our API and create their accounts. Open handlers.go and add the following:

<!-- <script src="[https://gist.github.com/MBvisti/7618cdc9c767fea93e29b9d322137538.js](https://gist.github.com/MBvisti/7618cdc9c767fea93e29b9d322137538.js)"></script> -->

We are going to accept a request with a JSON payload and using gin’s ShouldBindJSON method to extract the data. Go ahead and try it out!

It took some time to get here, so let me show you one of the benefits that I keep talking about: **testability**.

Create a file called `user_test.go` under the API folder and add the following:

A lot of things are happening here so let us go through them step-by-step.

We start by creating a struct called `mockUserRepo`. Our `UserService`knows that it needs a `UserRepository` with the following method: `CreateUser`. However, it does care about the actual implementation of said method, which allows us to mock the behaviour any way we want. In this case, we say that when the Name of the request is equal to “test user already created” (a bad name I know, but hopefully you get the point), return an error, and if not, just return nil. This allows us to mock the behaviour of our database to make it fit different situations, and test if our logic handles it in a way we expect it too.

Next, we create a new variable called `mockRepo` of type `mockUserRepo` We then create a `mockUserService` and pass the `mockRepo` to it, and we are ready to go! The actual test is what is known as a table-driven test. I won’t go into details about it as it is beyond the scope of this article, but if you want to know more, check out Dave Chaney’s article about [it](https://dave.cheney.net/2013/06/09/writing-table-driven-tests-in-go).

Now, whenever we add a method to the `UserRepository` we would also have to add it here, in our `mockUserRepo`. We would of course also like to have some integration test, but what I really wanted to show with this article was how to do unit tests as these are cheap and easy to write.

Run `go test ./...` from the root directory and all tests should pass.

### TDD implementation of Weight Service

Our application is not worth much right now. We can only create a user but not track our weight or calculate the amount of calories we need. Let’s change that!

Our application is not worth much right now. We can only create a user but not track our weight or calculate the number of calories we need. Let’s change that!I’m a big fan of test-driven development (TDD) and the way this application is structured makes it really easy to use. We are going to need three methods on our weight service: New, `CalculateBMR` and `DailyIntake` and two on our repository: `CreateWeightEntry` and GetUser. Open `weight.go` and add the following to `WeightService` and `WeightRepository`:

Next, we need to add three structs to our definitions file: `´NewWeightRequest`, `Weight` and `User`. Open up `weight.go` and add the following:

Now, you will see an error on `NewWeightService` about missing methods. We don’t want to write the actual implementation yet, as we are doing TDD, so for now, just add this below `NewWeightService`:

Open up `main.go` and you will see that we also have some missing methods on storage passed to `api.NewWeightService`. Open up `storage.go` and add these:

Lets now add the tests that we will need, create a file called`weight_test.go` in the API folder and add the following:

The actual content of the tests is not so important as the fact that we can quickly write tests and mock external dependencies such as the methods to interact with the database.

Run `go test ./...` from the root directory and you should receive a lot of failed tests. We are going to fix this by implementing the logic of these methods, starting with the three in our `WeightService`. Add this below `NewWeightService`:

With these methods added all of the tests should pass.

The last thing we need is to add the methods needed to interact with the database. Open `storage.go` and add the following:

We didn’t do this in true TDD style, however, it should again paint a picture of how we can structure Go applications and develop them using TDD. Feel free to re-implement this section and do it in true TDD style: create one test, make it pass, create the next one, and so on.

We have almost everything we need now. The last thing we need is to add routes and a handler to create a weight entry for a given user. I’m going to leave this up to the reader to implement, as the building blocks should be in place. If you are feeling lazy you can just check out the accompanying Github repository.

### The end

Hopefully, this tutorial gave you some insights on how to structure your Golang applications. It was a long one I know, but hopefully, you didn’t waste your time. In a part two, I will show how to add Makefile commands, integration tests and easily deploy the application. If you have any questions or criticisms, please do not hesitate to reach out.

My [twitter](https://twitter.com/mbvisti) and [github](https://github.com/mbvisti).

---

### Resources

[Project GitHub](https://github.com/MBvisti/weight-tracker-article)
[The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
[Golang-migrate](https://github.com/golang-migrate/migrate/)
[Table-driven tests](https://dave.cheney.net/2013/06/09/writing-table-driven-tests-in-go)