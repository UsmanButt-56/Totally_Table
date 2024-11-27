import React from 'react'
import ActivityFeed from './ActivityFeed/ActivityFeed';
import Feeds from './Feeds/Feeds';
import mic from '../../assets/mic.svg';
import filledstar from '../../assets/filled-star.svg';
import star from '../../assets/star.svg';
function Activity() {
  return (
    <div>
      <ActivityFeed />
      <Feeds image1={mic} image2={mic} first="Daphne" second="is attending " third="UK Games Expo" time="Just now" desc_f="Daphne will attend UK Games Expo on Friday 31st May 2024 and Saturday 1st June 2024" desc_l="" comments="0" star={star} />
      <Feeds image1={mic} image2={mic} first="UK Games Expo " second="announced for 2024! " third="" time="" desc_f="Friday 31st May - Sunday 2nd June 2024." desc_l="Read the announcement" comments="0" star={filledstar} />
      <Feeds image1={mic} image2={""} first="Niles" second="updated their profile picture" third="" time="20 minutes ago" desc_f="" desc_l="" comments="0" star={filledstar} />
      <Feeds image1={mic} image2={""} first="You" second="posted an update:" third="" time="1 hour ago" desc_f="Hey lovely Tabletop people - does anyone fancy a trip abroad this year to attend Essen Spiel? I’ve always wondered what this convention would be like and wouldn’t mind an opportunity to break out my Deutsch! If you’re interested, let me know." desc_l="hhh" link="https://totallytabletop.social/conventions/essen-spiel-2025" comments="3" star={star} />
      <Feeds image1={mic} image2={""} first="Roz" second="commented:" third="" time="45 minutes ago" desc_f="I’m up for it, but I can’t speak any German…" desc_l="" comments="0" star={star} />
      <Feeds image1={mic} image2={""} first="Martin" second="is staying at Holiday Inn Express Edinburgh Airport" third="" time="2 days ago" desc_f="6th - 7th September 2024 for" desc_l="Tabletop Scotland" link="" comments="0" star={filledstar} />
    </div>
  )
}

export default Activity;