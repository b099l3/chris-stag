import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chris'Stag Party!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="The Plan!" />
        <p className="description">
          <ul>
          <li><a href="https://www.salthorse.beer/drink-food#drinks">1pm: Meet at Salt Horse</a> for swift beer and/or snacks (a table is booked for 6 under Chris' name) </li>
          <li>1:57pm: Catch 31 bus from the stop on South Bridge to New Dundas Park (a later bus can be taken if required)</li>
          <li>2:45pm: Arrive at New Dundas Park (£7 on the door) </li>
          <li>3pm: Kick off - Bonnyrigg Rose vs Bo'Ness Utd </li>
          <li>4:45pm: Match Ends </li>
          <li>4:53pm: Catch 31 bus back to Palmerston Place </li>
          <li><a href="https://www.thepalmerstonedinburgh.co.uk/">6:30pm: Dinner at the Palmerston </a></li>
          <li><a href="https://vaultcity.co.uk/pages/the-wee-vault-tasting-room-and-bottleshop">8:30pm: Drinks at The Wee Vault</a></li>
          <li></li>
          </ul>
        </p>
      </main>

      <Footer />
    </div>
  )
}
