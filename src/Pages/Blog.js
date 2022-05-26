import React from 'react';
import PageTitle from './../Components/Shared/PageTitle';

const Blog = () => {
    return (
        <div className="qna-container min-h-screen mt-10">
            <PageTitle title='Blogs' />
            <h1 className="font-bold mt-10">How to improve the performance of a React Application? :</h1>
            <p>
                The performance of mission-critical enterprise applications has a direct impact on customer satisfaction, employee productivity, business agility, and profitability. <br />

                To date, applications written in React are gaining more and more popularity. Developers love building all kinds of React apps because of their ability to handle UI components in browsers. On the other hand, it can cost you dearly. The size of a React application can be quite large for most React applications, which affects performance. The reason for this is that React is an advanced library and does not improve the performance of a website or application on its own. It must be properly configured and optimized in various aspects. Also, if you plan to attract a lot of users to your site, you need to optimize performance in a high-traffic environment to avoid unnecessary hassles.

            </p>

            <h1 className="font-bold mt-10">How does prototypical inheritance work? :</h1>
            <p>
                JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized objects that have the ability to be cloned and extended. This is known as prototypical inheritance and differs from class inheritance. Among popular object-oriented programming languages, JavaScript is relatively unique, as other prominent languages such as PHP, Python, and Java are class-based languages, which instead define classes as blueprints for objects.
            </p>

            <h1 className="font-bold mt-10"> What is a unit test? Why should write unit tests?</h1>
            <p>
                Unit testing is at the top of the testing pyramid, meaning it’s the first level of functional testing — the most critical step in developing an error-free software product. The main goal of unit testing is to test each unit or module of the product at the early stage of development to prevent any errors from migrating to the next level.

                First thing’s first: what is the definition of the unit? Here, a unit is the smallest and simplest part of the product that you can test to improve its performance. It can be a method, procedure, object, or module. This test only requires a few inputs and generates a single output.

                Both web developers and quality analysts are often responsible for performing unit testing either manually or through automation (most common).
                Unit testing helps companies:

                Improve code quality
                Create reusable modules
                Simplify documentation
                Ensure seamless integration with several tools and technologies.
            </p>
            <h1 className="font-bold mt-10">What are the different ways to manage a state in a React application?</h1>
            <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.

                svg viewer
                The built-in way that React provides for setting component states is by using setState() and adding local state to a class. There are several other ways to manage state​s in React, including the use of:

                <br />
                <span className='font-bold'>Hooks</span>  <br />
                <span className='font-bold'>React Context API</span> <br />
                <span className='font-bold'>Apollo Link State</span> <br />
                If developers do not have scalability in mind then it is really hard to find out what is happening when something goes wrong. This is why you need state management in your application.</p>

            <h1 className="font-bold mt-11">Why you do not set the state directly in React?</h1>
            <p>One should never update the state directly because of the following reasons: <br />

                <span className='font-bold'>If you update it directly, calling the setState() afterward may just replace the update you made.</span> <br />
                <span className='font-bold'>When you directly update the state, it does not change this.state immediately. <br />  Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</span> <br />
                <span className='font-bold'> You will lose control of the state across all components.</span>
            </p>

        </div>
    );
};

export default Blog;