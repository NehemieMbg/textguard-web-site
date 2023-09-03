import Code from '@/app/components/Code';

const page = () => {
  const npmText = 'npm install @6nehemie/textguard';
  const npmInstall = (
    <div>
      <p>
        <span className="text-white">npm</span> install @6nehemie/textguard
      </p>
    </div>
  );

  const yarnText = 'yarn add @6nehemie/textguard';
  const yarnInstall = (
    <div>
      <p>
        <span className="text-white">yarn</span> add @6nehemie/textguard
      </p>
    </div>
  );

  const codeExampleText = `import { isValidEmail } from '@6nehemie/textguard';

const email = 'example@exmaple.com';
  
// checks if the user email is valid
const validEmail = isValidEmail(email); //returns true
  
if (validEmail === true) {
  /** Your code */
}`;

  const codeSnippet = (
    <div className="text-white">
      <p className="mb-4">
        <span className="text-sky-300">import</span> {`{ isValidEmail }`}{' '}
        <span className="text-sky-300">from </span>
        <span className="text-violet-300">&apos;@6nehemie/textguard&apos;</span>
        ;
      </p>

      <p className="mb-4">
        <span className="text-sky-300">const</span>{' '}
        <span className="text-violet-300">email</span> =
        &apos;example@exmaple.com&apos;;
      </p>

      <p className="text-light-gray">
        {'// checks if the user email is valid'}
      </p>
      <p className="mb-4">
        <span className="text-sky-300">const</span>{' '}
        <span className="text-violet-300">validEmail</span> =
        <span className="text-green-300"> isValidEmail</span>(email);{' '}
        <span className="text-light-gray">{'//returns true'}</span>
      </p>

      <p>
        <span className="text-sky-300">if</span> (
        <span className="text-green-300"> validEmail</span>{' '}
        <span className="text-[10px]">{'==='}</span>{' '}
        <span className="text-sky-300">true</span> ){' {'} <br />
        {'  '}
        <span className="text-light-gray ml-4">{'//returns true'}</span> <br />
        {'}'}
      </p>
    </div>
  );

  return (
    <section className="pb-16">
      <h1 className="text-white text-3xl font-medium mb-8">Quick Start</h1>
      <h3 className="text-white mb-6 text-xl">Installation</h3>

      <p className="mb-4">First, install the package using npm:</p>

      <div className="mb-8">
        <Code label={'Terminal'} text={npmText} code={npmInstall} />
      </div>

      <p className="mb-4">Or if you prefer yarn:</p>

      <div className="mb-16">
        <Code label={'Terminal'} text={yarnText} code={yarnInstall} />
      </div>

      <h3 className="text-white mb-6 text-xl">Example Usage</h3>
      <p className="mb-4">
        Here&apos;s a simple example that demonstrates email validation:
      </p>

      <div className="mb-8">
        <Code label={'Terminal'} text={codeExampleText} code={codeSnippet} />
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
