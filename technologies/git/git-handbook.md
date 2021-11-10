# Git Handbook

Source: (git-handbook)[https://guides.github.com/introduction/git-handbook/]

*VCS*:Version Control system
*DVCS*: Dstributed version control system

## Why git

- Git lest devs see the entire timeline
- It supoports differnt time zones
- Businesses using git to break down comunacation barriers

## Repos

*Repository*: the collection of files and folders associated with a project and the revision history

This is not the best source

The file history is stored in snapshots of the projects content called commits. The entire system is contained in the .git file.

Commits are in a linked list

Agacent lines of commits are branches

## Stage commit


## Basic commands

- `git init`: inits a brand new Git repository. Begins tracking
- `git clone`: create a local copy of a porject hta already exists remotelt
- `git add`: Stages a change. Stages the change for the next commit
- `git commit`: Save s teh snapshot to the project history and completes the change-tracking process.
- `git status`: shows the status of changes as untracked, modifeid, or staged
- `git branch` shows the braches localy
- `git merge`: meges braches together.
- `git pull`: updates local development form the remote.
- `git push`: updates the remote repo with local chages

## GitHub

GitHub is a service that hots git repos. It can be acessed by anyone anywhere.

## GitHub Flow

GitHub has its own flow built off git

1. Create Branch: This is the `main` branch of the repo
2. Add commits: Add snapshots to history
3. open pull request: Pull requests makes public your intended changes
4. Discuss and review code: The repo manager will review your code and aprove it
5. Merge: Mergeing the branches in git
6. Deploy: distribute you code to production

## Colab dev models

*Shared Ropository*: teams and indivs are given acess to certain privliges, read/write/admin. Allows for quick projection

*fork and pull*: mostly used for open source. Anyone can contibute. A dev can make a fork do whatever they want. Then if they want the can make a pull request to be reviewed and added to the main project.

