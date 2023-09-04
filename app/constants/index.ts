export const navbar = {
  logo: '@nehemie/textguard',
  version: '0.0.6',
  links: [{ href: '/docs', label: 'Docs' }],
};

export const sideNavigation = [
  {
    title: 'Getting started',
    links: [
      { href: '/docs', label: 'Introduction' },
      { href: '/docs/installation', label: 'Installation' },
      { href: '/docs/quick-start', label: 'Quick Start' },
    ],
  },
  {
    title: 'Validation',
    links: [{ href: '/docs/validation', label: 'String Validation' }],
  },
];

export const searchResults = [
  {
    title: 'Introduction',
    content:
      '\n        Welcome to the @nehemie/textguard documentation!\n        @6nehemie/textguard is a comprehensive JavaScript/TypeScript library engineered for robust data validation.\n        This library allows you to enhance the integrity of various data inputs in your application, from emails and usernames to custom fields.\n        With its straightforward set of functions and methods, @6nehemie/textguard employs a range of best practices and algorithms to make sure your validation is both secure and efficient.\n        This enables you to concentrate on building your application, relieving you from the complexities of data validation.\n        Whether you are an individual developer aiming to improve the security and reliability of your project, or part of a larger team in search of a reliable validation solution, @6nehemie/textguard is designed to meet your requirements.\n        ',
    link: '/docs',
  },
  {
    title: 'Installation',
    content:
      '\n        System Requirements:\n        Before installing @6nehemie/textguard, please ensure that your system meets the following requirements:\n        - Node.js: 16.14 or above. Note that this library uses ES modules, so make sure your Node.js environment supports it.\n        - TypeScript: Version 5.2.2 or above if you are using TypeScript in your project.\n        Quick and Easy Installation Steps\n        Using npm:\n        To install @nehemie/textgurad via npm, run the following command:\n        npm install @6nehemie/textguard\n        Using yarn:\n        To install @nehemie/textgurad via npm, run the following command:\n        yarn add @6nehemie/textguard\n        After installation, you are ready to import @6nehemie/textguard into your project and start laveragin its powerful features.\n        ',
    link: '/docs/installation',
  },
  {
    title: 'Quick Start',
    content:
      "\n        Installation\n        First, install the package using npm:\n        npm install @6nehemie/textguard\n        Or if you prefer yarn:\n        yarn add @6nehemie/textguard\n        Example Usage\n        Here's a simple example that demonstrates email validation:\n        import { isValidEmail } from '@6nehemie/textguard';\n        const email = 'example@exmaple.com';\n        // checks if the user email is valid\n        const validEmail = isValidEmail(email); //returns true\n        if (validEmail === true) {\n          /** Your code */\n        }\n        And that's it! You've successfully installed @nehemie/textguard and validated an email address.\n        ",
    link: '/docs/quick-start',
  },
  {
    title: 'Validation Utility Functions',
    content:
      "\n        This section provides details on utility functions designed to validate data such as email, username, password and others.\n        Most of these functions uses predefined regular expressions for their validation logic.\n        isValidEmail\n        isValidEmail(email: string): boolean\n        Parameters\n        email: string - The email address to validate.\n        Returns\n        boolean - Returnstrue if the email is valid,false otherwise.\n        Example usage\n        import { isValidEmail } from '@6nehemie/textguard';\n        const isEmailValid = isValidEmail('example@example.com');\n        console.log(isEmailValid);  // Output should be true or false\n        isValidUsername\n        isValidUsername(username: string): boolean\n        Parameters\n        username: string - The username to validate.\n        Returns\n        boolean - Returnstrue - The username to validate.false otherwise.\n        Example usage\n        import { isValidUrsername } from '@6nehemie/textguard';\n        const isUsernameValid = isValidUsername('john_doe');\n        console.log(isUsernameValid);  // Output should be true or false\n        isValidPassword\n        isValidPassword(password: string): boolean\n        Parameters\n        password: string - The password to validate.\n        Returns\n        boolean - Returnstrue - if the password is valid,false otherwise.\n        Example usage\n        import { isValidPassword } from '@6nehemie/textguard';;\n        const isPasswordValid = isValidPassword('Pa$$w0rd!');\n        console.log(isPasswordValid);  // Output should be true or false\n        arePasswordsMatching\n        arePasswordsMatching(password: string, confirmPassword: string): boolean\n        Parameters\n        password: string - The first password.\n        confirmPassword: string - The second password for confirmation.\n        Returns\n        boolean - Returnstrue if the passwords match,false otherwise.\n        Example usage\n        import { arePasswordsMatching } from '@6nehemie/textguard';\n        const doPasswordsMatch = arePasswordsMatching('Pa$$w0rd!', 'Pa$$w0rd!');\n        console.log(doPasswordsMatch);  // Output should be true or false\n        ",
    link: '/docs/validation',
  },
];

export const footerInfo = {
  logo: 'nehemie/textguard',
  version: '0.0.6',
  credit: `© ${new Date().getFullYear()} Nehemie Mombanga`,
  navigation: [
    {
      title: 'Documentation',
      links: [
        { href: '/docs', label: 'Introduction' },
        { href: '/docs/installation', label: 'Installation' },
        { href: '/docs/quick-start', label: 'Quick Start' },
      ],
    },
    {
      title: 'Validation',
      links: [{ href: '/docs/validation', label: 'String Validation' }],
    },
  ],

  externalNavigation: {
    title: 'Community',
    links: [
      { href: 'https://github.com/NehemieMbg/textGuard', label: 'GitHub' },
    ],
  },
};
