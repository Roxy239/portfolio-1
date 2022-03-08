
function Details(props) {

    const flexBox = {
        display: 'flex',
    }

    const center = {
        textAlign: 'center',
    }
    
    const imgFlex = {
        display: 'flex',
        width: '700px',
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
        border: '3px solid #ffa403',
        padding: '5px',
        borderRadius: '5px 15px',
        fontSize: '1.5rem',
        color: '#fdc018',
        marginLeft: '5px'
    }
    const marLef = {
        marginLeft: '15px',
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
                              <img src={props.imgLink[0]} width={700} alt='Loading Failed'/>
                              
                              <div style={imgFlex}>
                                  <img width ={230} src={props.imgLink[1]} alt='Loading Failed'/>
                                  <img width ={230} src={props.imgLink[2]} alt='Loading Failed'/>
                                  <img width ={230} src={props.imgLink[3]} alt='Loading Failed'/>
                              </div>
                            </div>

                            <div className="box" style={marLef}>
                              <p style={desc}>{ props.desc[0] }</p>
                              <p style={desc}>{ props.desc[1] }</p>
                              <p style={desc}>{ props.desc[2] }</p>
                              <p style={desc}>{ props.desc[3] }</p>


                              <h1 style = {{marginTop: '30px'}}>Technologies</h1>
                                
                                <ul style={liFlex}>
                                    <li style={liStyle}>react</li>
                                    <li style={liStyle}>bootstrap</li>
                                    <li style={liStyle}>nodejs</li>
                                    <li style={liStyle}>firebase</li>
                                </ul>       

                            </div>
                            
                        </div>

                      </div>

                  </div>

                </div>
            </section>
      </>
    );
  }
  
  export default Details;