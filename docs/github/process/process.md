---
sidebar_position: 1
id: process_git
title: Using Git
---


## Creating a Repository on GitHub

Creating a repository on GitHub is the first step in managing your code for a project. This section guides you through this process.

1. **Log in to GitHub**: Go to the **[GitHub website](https://github.com/BoreholeSeismic)** and log in with your credentials. 
2. **Create a New Repository**: Click on the plus icon in the top right corner and select "New repository".


        ![Create_repo](/img/repo.PNG)


3. **Repository Details**: In the creation page:
   - **Enter a Repository Name**: Choose a name that reflects the purpose of your project.
   - **Visibility**: Decide whether your repository should be public or private.

        
        ![Create_repo](/img/repo_creation.PNG)


4. **Finalize Creation**: Click on 'Create Repository' to finish setting up your new GitHub repository.

## Cloning the Repository in VSCode

To work on an existing project which is on GitHub, clone it into your local.

1. **Copy Repository URL**: Go to your GitHub repository and copy its URL.

        ![repo_name](/img/clone_url.PNG)


2. **Open VSCode**: Launch Visual Studio Code on your computer.
3. **Clone Repository**:
   - Go to the Source Control panel in VSCode.
   - Click on 'Clone Repository'.

        ![Clone](/img/clone_vsc.PNG)
    
   - Paste the Repository URL when prompted.
   - Choose a local directory where the repository will be saved.

## Configuring Git

Before starting to work with Git, you need to configure your identity and enable SSH for secure communication with GitHub.

:::tip NOTE
To work with Git commands, you need to have Git installed on your local system. Download and install Git from the **[official website](https://gitforwindows.org/)**
:::

In the VSCode, click on the `Terminal-New Terminal` and navigate to your project directory.

#### Set Up User Information

```bash
git config --global user.name "your_name"
git config --global user.email "your_email@example.com"
```
Replace "your_name" with the Github user name and "your_email@example.com" with your Github email.

#### Enable SSH

```bash
$env:USE_SSH='true'
```
## Basic Git Commands

#### Initializing a Local Repository
This command sets up a new Git repository in your current directory.

```bash
git init
```


#### Adding files
This command adds all new and changed files to the staging area, preparing them for a commit.

```bash
git add .
```

#### Connect to the remote repository
This command links your local repository to the GitHub repository (remote repository).

```bash
git remote add origin "your_repository_url"
```
Replace "your_repository_url" with the URL of your GitHub repository.

#### Commit the changes
This command saves your staged changes along with a descriptive message. The message should briefly describe what changes were made in this commit.

```bash
git commit -m "commit message"
```

#### Push the code
This command sends your committed changes to GitHub, updating your remote repository.
```bash 
git push -u origin main
```
