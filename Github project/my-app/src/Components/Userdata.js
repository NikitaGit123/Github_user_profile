import React from 'react'

function Userdata({data}) {
  return (
    <>
       <div>
        {
            <div className="container">
            <main className="grid">
              {data.map((ele,i) => {
                const str = ele.created_at;
                const date = new Date(str);
    
                return (
                  <div className="user-card">
                    <span className="avatar-holder">
                      <img src={ele.owner.avatar_url} alt="Avatar" />
                    </span>
                    <span className="user-info-holder">
                      <h2 className="name">{ele.owner.login}</h2>
                      <span className="skill">
                        Repo Name <span className="bold">{ele.name}</span>
                      </span>
                      <br></br>
                        <span className="stars evaluation">
                          <span className="star-text evaluation-text">
                            Stars :
                            <span className="bold">
                              {ele.stargazers_count}
                            </span>
                          </span>
                        </span>                            
                        <div className="evaluations">
                        <span className="stars evaluation">
                          <span className="star-text evaluation-text">
                            watchers_count :
                            <span className="bold">
                            {ele.watchers_count}
                            </span>
                          </span>
                        </span>  
                        
                        <br></br>
                        <span className="reviews evaluation">
                          <span className="reviews-text evaluation-text">
                            Language: <span className="bold">{ele.language}</span>
                          </span>
                        </span>
                        <br></br>
    
                        <span className="desc">
                          <p>{ele.description}</p>
                        </span>
    
                        <span className="student evaluation">
                          <span className="student-text evaluation-text">
                            {date.toDateString()}
                          </span>
                        </span>
                      </div>
                    </span>
                  </div>
                );
              })}
            </main>
          </div>
        }
      </div>
    </>
  )
}

export default Userdata



