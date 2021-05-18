**As a team we believe that we can hire in a more inclusive manner by just looking at your code.**

To test our hypothesis we came up with this challenge for you to complete.

**We don’t want to see your CV.**

All you have to do is complete the test below for the chance to get hired at Aula on a 6 month Contract and win £6000 on top of your new job.

**We don’t want you to waste your time.**

Please do not participate in this test if you do not meet the hard requirements to qualify for the role.

Our team can not hire you if you are not:
* Located in a close timezone to the team, that means between GMT -5 and GMT +3.
* Happy to accept a 6 month contract on a day rate between £350 and £500 a day (based on your experience and location).
* An experienced coder with at least 3 years coding in Production in an Agile Scrum environment.

[Learn more about working as a contractor](http://bit.ly/ContractAtAula) by checking this page out on our Open Access Handbook, [the Aula Brain](http://bit.ly/AulaBrain)

## Now let's get started with the test

### Objective

In a fictional world, Aula Education has branched into the music business and we have launched a new web application. However it has some problems and is lacking features. Your job is to work on the items described under Tasks

### Brief

Our music app displays the top 100 songs based on the iTunes API and lets you search the results.

This code challenge allows you to choose your own path and lets you flaunt your creative panache and technical skills along the way.

The test has a time limit. However, please don't feel the need to spend more than 2 hours total working on your solution. We encourage you follow the instructions carefully and try to keep things simple.

### Existing codebase

* `frontend`: client side rendered React SPA.
* `backend`: Express server skeleton that will come in handy for one of your tasks. The server connects to an in-memory MongoDB store to simulate the persistence layer of the application.

### Tasks

- Implement a favorite feature:
  - Users can toggle songs/albums as favorite.
  - Favorites persists across page refreshes.
  - Favorites are fetched from and sent to the `backend` Express server via a REST API. The service should write to and read from the database. Don't worry about authentication or supporting multiple users here.
- Allow users to play song previews directly from the app. The iTunes API already returns a preview.
- At the moment, the UX is not fantastic, can you add loading, error and empty (no results) states?
- Add automated tests. We recommend using Jest and React Testing Library.

Please walk us through your changes and thought process in a video screencast (max 5min). [Loom](https://www.loom.com/) is a pretty good tool for that. Feel free to turn your video off if you're more comfortable that way.

Optional:
- Is Redux the most appropriate way to manage state in an app of this size? Can you refactor state management to adopt more suitable solution?
- The search feature is a bit slow, can you speed it up?
- Surprise us! Add a feature you think would work well here.

### Evaluation Criteria

- We're looking for you to demonstrate you can jump into an existing codebase and make changes with clean code.
- Simplicity: is the solution appropriate for the complexity of the problem?
- Completeness: were the instructions followed?
- Correctness: does the functionality act in sensible, thought-out ways?
- Testing: is the app adequately tested? Do tests depend on implementation? Do they cover behavior?

### CodeSubmit

Please organize, design, test and document your code, then push your changes to the master branch and finally submit your assignment!

Good luck 🚀,

The Aula team.
