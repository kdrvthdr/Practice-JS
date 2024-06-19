"use strict";

async function fetchSequentialData() {
  try {
    let response = await fetch('https://api.agify.io?name=michael'); 
    let user = await response.json();
    console.log('Random name data:', user);
    
    let gitResponse = await fetch(`https://api.github.com/users/${user.name}`);
    if (!gitResponse.ok) {
      throw new Error(`GitHub user not found for username: ${username}`);
    }
    let gitUser = await gitResponse.json();
    console.log('GitHub user data:', gitUser);

    console.log('GitHub username:', gitUser.login);

  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchSequentialData();
