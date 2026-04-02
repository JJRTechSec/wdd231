const applicationInfo = new URLSearchParams(window.location.search);
console.log(applicationInfo);

document.querySelector('#results').innerHTML = `
<p>Name: ${applicationInfo.get('first')}</p>
<p>Last Name: ${applicationInfo.get('last')}</p>
<p>Phone: ${applicationInfo.get('phone')}</p>
<p>Email: ${applicationInfo.get('email')}</p>
<p>Work Title: ${applicationInfo.get('workTitle')}</p>
<p>Company Name: ${applicationInfo.get('companyName')}</p>
<p>Business Description: ${applicationInfo.get('companyDescription')}</p>
<p>Membership Level: ${applicationInfo.get('membership')}</p>
<p>Time of Application: ${applicationInfo.get('timestamp')}</p>`