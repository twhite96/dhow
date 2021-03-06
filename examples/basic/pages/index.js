import Dhow, { Head } from 'dhow'

export default () => (
    <main>
        <Head>
            <title>Hello there. This is a working head!</title>
        </Head>
        <h1>Hello there!</h1>
        <p>
            This is a super simple example of generating static files using
            Dhow. You can learn more{' '}
            <a href="https://github.com/kartiknair/dhow">here</a>
        </p>
        <p>
            Here's a <a href="/about">link to the about page</a> just for good
            fun :D
        </p>
    </main>
)
