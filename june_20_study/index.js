fetch('https://learn.codeit.kr/api/interviews/summer')
  .then((res) => res.json())
  .then((interviewResult) => {
    const {interviewees} = interviewResult;
    const newMembers = interviewees.filter((interview) => interview.result === 'pass');
    return newMembers;
  })
  .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
    method : 'POST',
    body : JSON.stringify(newMembers),
  })
  )
  .then((res) => {
    if(res.status === 200){
      return fetch('https://learn.codeit.kr/api/members')
    }
    else{
      throw new Error('New members not added');
    }
  })
  .then((res) => res.json())
  .then((result) => console.log(result))



