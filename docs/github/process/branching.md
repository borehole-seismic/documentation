---
sidebar_position: 2
id: branch_git
title: About branches
---

# Branching in Git

Branches are a fundamental concept in Git that allow developers to work on different aspects of a project simultaneously without interfering with each other's work. 

## Why Create and Work with Branches?

Branches offer several benefits in a collaborative development environment:

1. **Isolation**: Branches provide a separate workspace for each feature, bug fix, or task, isolating changes from the main codebase. This prevents conflicts and allows multiple developers to work simultaneously.

2. **Risk Mitigation**: By working in branches, developers can experiment and test new ideas without affecting the stability of the main codebase. If an experiment fails, it can be discarded without harming the project.

3. **Code Review**: Branches facilitate code review since changes are encapsulated within a specific branch. Reviewers can focus on the changes related to a single feature or bug fix.


## Creating a New Branch on GitHub

1. **Navigate to Repository**: Go to the main page of the GitHub repository you want to work in.

2. **Access Branches**: On the left-hand side, in the file tree view, select the branch dropdown menu. Click "View all branches" from the dropdown menu.

   ![Screenshot of the file tree view for a repository](/img/view_branches.PNG)


3. **Create a New Branch**: Click the "New branch" button.

   ![Screenshot of the "Branches" page for a repository](/img/branch.PNG)

4. **Name Your Branch**: Under "Branch name," type a name for your new branch.

5. **Choose a Source**: Under "Branch source," choose where you want your new branch to originate from.

7. **Create the Branch**: Finally, click the "Create branch" button to create your new branch.

# Pull Requests in Git

Pull requests (PRs) are a fundamental aspect of collaborative development in Git, enabling teams to propose, review, and merge code changes. 

## What is a Pull Request?

A pull request is a request to merge code changes from one branch (usually a feature branch) into another (often the main or master branch). It acts as a mechanism for code review and collaboration, allowing multiple team members to work on separate branches and integrate their changes into a shared codebase systematically.


# Creating a Pull Request

Creating a pull request involves the following steps:

1. **Go to Repository**: Navigate to your GitHub and open the repository where you want to create the pull request.

2. **Select Branch**: Ensure you are on the branch containing your changes. If not, switch to the appropriate branch.

3. **Click on "Pull Request"**: Look for the "Pull Request" or "New Pull Request" button and click it.

4. **Choose Target Branch**: Select the branch into which you want to merge your changes (usually the main or master branch).

5. **Provide Details**: Add a descriptive title and, if necessary, a description of the changes you're proposing.

6. **Assign Reviewers**: Specify who should review your pull request by assigning reviewers.

7. **Review and Discussion**: Reviewers will examine your code, comment, and suggest improvements. Engage in discussions and make updates as needed.

9. **Approval**: Once your changes are approved and all checks pass, you can merge the pull request into the target branch.

10. **Merge and Close**: Click the "Merge" button to merge your changes, and your pull request is closed.

Creating a pull request is a crucial step in collaborative development, allowing for code review, discussion, and controlled integration of changes into the main codebase.

