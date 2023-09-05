import Code from '@/app/components/Code';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation | @nehemie/textguard',
  description:
    '@nehemie/textguard documentation to help you build your app and validate the data that you need',
};

const page = () => {
  const npmText = 'npm install @6nehemie/textguard';
  const yarnText = 'yarn add @6nehemie/textguard';

  return (
    <section className="pb-16">
      <h1 className="text-white text-3xl font-medium mb-1.5">Installation</h1>
      <h3 className="text-white mb-4">System Requirements:</h3>

      <p className="mb-4">
        Before installing{' '}
        <span className="text-white ">@6nehemie/textguard</span>, please ensure
        that your system meets the following requirements:
      </p>

      <ul className="list mb-16">
        <li>
          <span className="text-white">- Node.js:</span> 16.14 or above. Note
          that this library uses ES modules, so make sure your Node.js
          environment supports it.
        </li>
        <li>
          <span className="text-white">- TypeScript:</span> Version 5.2.2 or
          above if you are using TypeScript in your project.
        </li>
      </ul>

      <h2 className="text-xl text-white font-medium mb-8">
        Quick and Easy Installation Steps
      </h2>

      <h3 className="text-white mb-2">Using npm:</h3>
      <p className="mb-4">
        To install @nehemie/textgurad via npm, run the following command:
      </p>

      <div className="mb-16">
        <Code label={'Terminal'} text={npmText} />
      </div>

      <h3 className="text-white mb-2">Using yarn:</h3>
      <p className="mb-4">
        To install @nehemie/textgurad via yarn, run the following command:
      </p>

      <div className="mb-4">
        <Code label={'Terminal'} text={yarnText} />
      </div>

      <p>
        After installation, you are ready to import{' '}
        <span className="text-white">@6nehemie/textguard</span> into your
        project and start laveragin its powerful features.
      </p>
    </section>
  );
};

export default page;
