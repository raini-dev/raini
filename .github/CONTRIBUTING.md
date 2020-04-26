# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change. Check out CODEOWNERS to find out who is responsible for the section of the project you are going to make change to.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Suggesting a topic for a workshop

Before suggesting a topic, please, look through the [issues](issues_link).

There is a chance that someone already proposed the topic and it is being discussed. Then just jump into the discussion and start throwing :thumbsup: at everyone.

Also, the workshop may have already be conducted. In this case, you can find public materials in the issue (if applicable). If you think that all that is too old and ugly, you can call for reopening the issue.

If you are absolutely sure that the topic is brand-new, [create a new issue](create_issue_link) and pick the "Suggest a workshop topic" issue template and describe as many details as you can.

## Suggesting a workshop

This part is applicable if you want to prepare a workshop yourself and suggest it to be part of Raini.

We provide [workshop template](https://github.com/raini-dev/raini-workshop-template) to get up and running quickly. The workshop provides all the boilerplate, including the slides template, links to useful guides and requirements. It also contains a checklist so that you can be sure that you don't miss anything.

When you are ready, we set up a dry run session. You can think of it as a grand reheasal where you conduct the workshop for a selected audience. You are free to invite someone else if you like but don't try to make it a party. After the dry run we provide recommendations on the materials.

After the materials are approved, we fork your repository. Keep in mind that during the workshop you MUST reference the fork, not the original repository. The fork MUST be up to date when the workshop takes place, so we insist on informing us on any amendments after the materials approval.

## Joining the initiative

> TBD

## Pull Request Process

- Create a fork for the repository
- Add\update dependencies only after receiving approval from the owners of the repository
- Do not manually change project version
- If you contribute code, it MUST be at least 75% covered with tests
- Any contribution MUST be checked with linting tools. Otherwise, the CI pipeline will fail. We DO NOT communicate on pull requests that fail CI checks.
- Create a pull request to `master` branch of current repository
- Specify link to the issue you are resolving with this contribution (issue MUST exist and all the discussions in the
  issue MUST be resolved as well)

[create_issue_link]: https://github.com/priestine/not-node-school/issues/new
[issues_link]: https://github.com/priestine/not-node-school/issues
