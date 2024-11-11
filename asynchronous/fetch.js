async function userInfo(names) {
    let jobs = [];
  try {
    for (const name of names) {
        let job = await fetch(`https://api.github.com/users/${name}`);
        let response = await job.json();
        console.log(response);
        
        jobs.push(response);
        let res = await Promise.all(jobs);
        console.log(res);
        
    }
  } catch (error) {
    console.log(error);
    
  }
    
}
// userInfo(["hy","i"])

async function fetchData() {
  try {
    const response = await fetch('https://api.publicapis.org/entries');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

fetchData();