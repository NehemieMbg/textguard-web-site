import Code from '@/app/components/Code';

const page = () => {
  const npmText = 'npm install @6nehemie/textguard';
  const yarnText = 'yarn add @6nehemie/textguard';
  const codeExampleText = `import { isValidEmail } from '@6nehemie/textguard';

const email = 'example@exmaple.com';
  
// checks if the user email is valid
const validEmail = isValidEmail(email); //returns true
  
if (validEmail === true) {
  /** Your code */
}`;

  return (
    <section className="pb-16">
      <h1 className="text-white text-3xl font-medium mb-8">Quick Start</h1>
      <h3 className="text-white mb-6 text-xl">Installation</h3>

      <p className="mb-4">First, install the package using npm:</p>

      <div className="mb-8">
        <Code label={'Terminal'} text={npmText} />
      </div>

      <p className="mb-4">Or if you prefer yarn:</p>

      <div className="mb-16">
        <Code label={'Terminal'} text={yarnText} />
      </div>

      <h3 className="text-white mb-6 text-xl">Example Usage</h3>
      <p className="mb-4">
        Here&apos;s a simple example that demonstrates email validation:
      </p>

      <div className="mb-8">
        <Code label={'index.ts'} text={codeExampleText} />
      </div>

      <p>
        And that&apos;s it! You&apos;ve successfully installed
        <span className="text-white"> @nehemie/textguard </span> and validated
        an email address.
      </p>
    </section>
  );
};

export default page;
