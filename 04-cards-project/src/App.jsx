import React from 'react'
import {Bookmark, User} from 'lucide-react'
import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$28/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$32/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$26/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$30/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$38/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$42/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    companyName: "Adobe",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$31/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    companyName: "Salesforce",
    datePosted: "6 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$27/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
    companyName: "IBM",
    datePosted: "2 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$30/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Java Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$29/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=intel.com&sz=128",
    companyName: "Intel",
    datePosted: "3 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$25/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    companyName: "NVIDIA",
    datePosted: "1 week ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=cisco.com&sz=128",
    companyName: "Cisco",
    datePosted: "9 days ago",
    post: "Network Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$28/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
    companyName: "Uber",
    datePosted: "5 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$35/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    companyName: "Spotify",
    datePosted: "12 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$24/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=airbnb.com&sz=128",
    companyName: "Airbnb",
    datePosted: "2 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$33/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$27/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128",
    companyName: "Accenture",
    datePosted: "4 days ago",
    post: "MERN Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$23/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=cognizant.com&sz=128",
    companyName: "Cognizant",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$25/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=jpmorganchase.com&sz=128",
    companyName: "JPMorgan Chase",
    datePosted: "10 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$34/hour",
    location: "Mumbai, India"
  }
];

console.log(jobs)
  
  return (
    <div className='parent'>
    {jobs.map(function(elem) {

      return <Card 
      company={elem.companyName}
      post={elem.post}
      tag1={elem.tag1}
      datePosted={elem.d}
      tag2={elem.tag2}
      pay={elem.pay}
      location={elem.location}
      logo={elem.brandLogo}
      />
    })}
    </div>
  )
}

export default App
