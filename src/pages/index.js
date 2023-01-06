import * as React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import ToConvertForm from "../components/forms/toConvertForm"
import PageBody from "../components/body"
import Seo from "../../src/components/layout/seo"
const IndexPage = () => (
  <>
    <Layout>
      <Banner />
      <ToConvertForm />
      <PageBody />
    </Layout>
  </>
)

export const Head = () =>(
<>
 <Seo title="chiffres en lettres" />
 <meta name="google-site-verification" content="pgYXcrzf6ujhco4V890jRCosFYC_-78azGh7fvH-1Sk" />
</>
 )

export default IndexPage
