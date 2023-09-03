import Code from '@/app/components/Code';

const page = () => {
  const isEmailValid = `import { isValidEmail } from '@6nehemie/textguard';

const isEmailValid = isValidEmail('example@example.com');
console.log(isEmailValid);  // Output should be true or false`;

  const isUsernameValid = `import { isValidUrsername } from '@6nehemie/textguard';

const isUsernameValid = isValidUsername('john_doe');
console.log(isUsernameValid);  // Output should be true or false`;

  const isValidPassword = `import { isValidPassword } from '@6nehemie/textguard';;

const isPasswordValid = isValidPassword('Pa$$w0rd!');
console.log(isPasswordValid);  // Output should be true or false`;

  const arePasswordsMatching = `import { arePasswordsMatching } from '@6nehemie/textguard';

const doPasswordsMatch = arePasswordsMatching('Pa$$w0rd!', 'Pa$$w0rd!');
console.log(doPasswordsMatch);  // Output should be true or false`;

  return (
    <section className="pb-8">
      <h1 className="text-white text-3xl font-medium mb-6">
        Validation Utility Functions
      </h1>

      <p className="mb-16">
        This section provides details on utility functions designed to validate
        data such as email, username, password and others. Most of these
        functions uses predefined regular expressions for their validation
        logic.
      </p>

      <div>
        <h2 className="text-xl text-white font-medium mb-6">isValidEmail</h2>

        <p className="mb-4 text-slate-200 max-w-[max-content]  bg-[#282C34] py-0.5 px-1.5 rounded-md">
          isValidEmail(email: string): boolean
        </p>

        <h3 className="text-white mb-4">Parameters</h3>
        <p className="mb-4">
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            email: string
          </span>{' '}
          - The email address to validate.
        </p>

        <h3 className="text-white mb-4">Returns</h3>
        <p className="mb-8">
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            boolean
          </span>{' '}
          - Returns
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            true
          </span>{' '}
          if the email is valid,
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            false
          </span>{' '}
          otherwise.
        </p>

        <p className="mb-4">Example usage</p>

        <div className="mb-16">
          <Code label={'index.ts'} text={isEmailValid} />
        </div>
      </div>

      <div>
        <h2 className="text-xl text-white font-medium mb-6">isValidUsername</h2>

        <p className="mb-4 text-slate-200 max-w-[max-content]  bg-[#282C34] py-0.5 px-1.5 rounded-md">
          isValidUsername(username: string): boolean
        </p>

        <h3 className="text-white mb-4">Parameters</h3>
        <p className="mb-4">
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            username: string
          </span>{' '}
          - The username to validate.
        </p>

        <h3 className="text-white mb-4">Returns</h3>
        <p className="mb-8">
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            boolean
          </span>{' '}
          - Returns
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            true
          </span>{' '}
          - The username to validate.
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            false
          </span>{' '}
          otherwise.
        </p>

        <p className="mb-4">Example usage</p>

        <div className="mb-16">
          <Code label={'index.ts'} text={isUsernameValid} />
        </div>
      </div>

      <div>
        <h2 className="text-xl text-white font-medium mb-6">isValidPassword</h2>

        <p className="mb-4 text-slate-200 max-w-[max-content]  bg-[#282C34] py-0.5 px-1.5 rounded-md">
          isValidPassword(password: string): boolean
        </p>

        <h3 className="text-white mb-4">Parameters</h3>
        <p className="mb-4">
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            password: string
          </span>{' '}
          - The password to validate.
        </p>

        <h3 className="text-white mb-4">Returns</h3>
        <p className="mb-8">
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            boolean
          </span>{' '}
          - Returns
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            true
          </span>{' '}
          - if the password is valid,
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            false
          </span>{' '}
          otherwise.
        </p>

        <p className="mb-4">Example usage</p>

        <div className="mb-16">
          <Code label={'index.ts'} text={isValidPassword} />
        </div>
      </div>

      <div>
        <h2 className="text-xl text-white font-medium mb-6">
          arePasswordsMatching
        </h2>

        <p className="mb-4 text-slate-200 max-w-[max-content]  bg-[#282C34] py-0.5 px-1.5 rounded-md">
          arePasswordsMatching(password: string, confirmPassword: string):
          boolean
        </p>

        <h3 className="text-white mb-4">Parameters</h3>
        <p className="mb-4">
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            password: string
          </span>{' '}
          - The first password.
        </p>
        <p className="mb-4">
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            confirmPassword: string
          </span>{' '}
          - The second password for confirmation.
        </p>

        <h3 className="text-white mb-4">Returns</h3>
        <p className="mb-8">
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            boolean
          </span>{' '}
          - Returns
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            true
          </span>{' '}
          if the passwords match,
          <span className="mb-4 text-slate-200  bg-[#282C34] w-[max-content] py-0.5 px-1.5 rounded-md">
            false
          </span>{' '}
          otherwise.
        </p>

        <p className="mb-4">Example usage</p>

        <div className="mb-16">
          <Code label={'index.ts'} text={arePasswordsMatching} />
        </div>
      </div>
    </section>
  );
};

export default page;
