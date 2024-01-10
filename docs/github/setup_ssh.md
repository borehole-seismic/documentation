---
sidebar_position: 3
id: setup_ssh
title: Setting up SSH
---
# Setting Up SSH for GitHub

## What is SSH?

SSH, or Secure Shell, is a cryptographic network protocol used to secure network services over an unsecured network. For GitHub, SSH keys are a way to identify trusted computers without requiring usernames and passwords for each visit.

## Advantages of Using SSH

- **Security:** SSH is more secure than using a username and password or a personal access token.
- **Convenience:** Once set up, you don't need to enter credentials every time you push or pull.

## How to Set Up SSH for GitHub

### Checking for Existing SSH Keys

Before creating a new SSH key, check for existing keys on your Windows machine.

1. Open Git Bash. If you do not have it installed, download **[Git for Windows](https://gitforwindows.org/)**.
2. Enter the following command:

```bash 
ls -al ~/.ssh
```
This command lists all the files in your SSH directory. Look for files named id_rsa.pub, id_ecdsa.pub, id_ed25519.pub, or similar. These are the public keys. If such files are present, you already have existing SSH keys.

### Generating a New SSH Key in Windows

If you do not have an SSH key or wish to generate a new one, follow these steps:

1. **Open Git Bash**.

2. **Generate the SSH Key**.
   - Paste the following command in Git Bash, replacing `"your_email@example.com"` with your GitHub email address:

     ```bash
     ssh-keygen -t ed25519 -C "your_email@example.com"
     ```

   - If your system does not support the Ed25519 algorithm, use RSA instead:

     ```bash
     ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
     ```

3. **Save the SSH Key**.
   - When prompted to "Enter a file in which to save the key," press Enter to save the key to the default file location.

4. **Enter a Passphrase (Optional)**.
   - You will be prompted to enter a passphrase for added security.
   - If you prefer not to use a passphrase, simply press Enter to continue without it.

5. **Locating the SSH Key**.
   - After completing these steps, your new SSH key will be located in the `.ssh` directory within your user profile.
   - Locate the `id_ed25519.pub` file and copy the key.

      ![SSH](/img/sshkey.PNG)

### Add the SSH Key to GitHub

   - Navigate to your GitHub account settings.
   - Go to "SSH and GPG keys".

      ![SSH](/img/ssh.PNG)


   - Add the new SSH key by pasting the contents of your public key file.



