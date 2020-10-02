import Head from "next/head";

export const Layout = props => (
  <main>
    <Head>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
        />
      <link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet" /> 
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800,900i&display=swap" rel="stylesheet" /> 
    </Head>
    <style jsx global>
      {`
        main {
          margin-left: auto;
          margin-right: auto;
          max-width: 42rem;
          padding: 2.625rem 1.3125rem;
        }
        body {
          background: rgb(40, 44, 53);
        }
        a {
          color: #0091ea;
          text-decoration: none;
        }
        li {
          font-size: 1.25em;
        }
        .site-title {
          font-weight: 600;
          font-size: 3rem;
          text-align: center;
          color: #fff;
          margin-bottom: 1em;
        }
        .post-title {
          color: #0091ea;
          font-weight: 800;
          font-size: 1.75rem;
        }
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        img {
            max-width: 100%;
        }
      `}
    </style>
    {props.children}
  </main>
);