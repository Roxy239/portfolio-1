
function Details(props) {

    const flexBox = {
        display: 'flex',
    }

    const center = {
        textAlign: 'center',
    }
    
    const imgFlex = {
        display: 'flex',
        width: '750px',
        justifyContent: 'space-between'
    }

    const desc = {
        fontSize: '2rem'
    }


    const liFlex = {
        listStyle: 'none',
        display: 'flex',
    }

    const liStyle = {
        border: '2px solid #ffa403',
        padding: '7px',
        borderRadius: '5px 12px',
        fontSize: '1.5rem',
        color: '#fdc018',
        marginLeft: '5px'
    }

    return (
      <>
          <section className="about">
  
              <h2 className="heading"> { props.title } </h2>
  
              <div className="row">
  
                  <div className="info-container">
  
                      <h1 style = {center}>{ props.brief }</h1>
  
                      <div className="box-container">
  
                        <div className="flexBox" style={flexBox}>

                            <div className="box">
                              <img src={props.imgLink[0]} width={750}/>
                              
                              <div style={imgFlex}>
                                  <img width ={245} src={props.imgLink[1]}/>
                                  <img width ={245} src={props.imgLink[2]}/>
                                  <img width ={245} src={props.imgLink[3]}/>
                              </div>
                            </div>

                            <div className="box">
                              <p style={desc}>{ props.desc[0] }</p>
                              <p style={desc}>{ props.desc[1] }</p>
                              <p style={desc}>{ props.desc[2] }</p>


                              <h1 style = {center}>Technologies</h1>
                                
                                <ul style={liFlex}>
                                    <li style={liStyle}>react</li>
                                    <li style={liStyle}>bootstrap</li>
                                    <li style={liStyle}>nodejs</li>
                                </ul>
                                
                                

                            </div>

                            

                            
                        </div>

  
                      </div>
  
                      {/* <a href="latest resume.pdf" download="latest resume.pdf" className="btn"> Download CV <i className="fas fa-download"></i> </a> */}
  
                  </div>

                </div>
            </section>
  
                 
        
      </>
    );
  }
  
  export default Details;