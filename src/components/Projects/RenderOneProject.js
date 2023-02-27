import jsonFile from "./data_for_projects/data_for_projects.json"

export default function RenderOneProject() {

    const arrayOfData = jsonFile.data;
    // console.log(arrayOfData)

    return (
        <div id="all-projects-div" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            // width: '100%'
        }}>

            {arrayOfData.map((item, index) => (
                <div id="one-project-container-div" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '64px 80px',
                    gap: '10%',
                    // width: '100%'
                }} key={item.id}>
                    
                    <div id="pic-for-project" style={{
                        backgroundImage: `url(${item.pic})`,
                        width: '630px',
                        height: '388px',
                        border: "4px solid #525B56",
                        order: `${(index % 2 === 0 || index === 0) ? 0 : 1}`
                    }}></div>

                    <div id="one-project-container" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        // width: '44%',
                        gap: '32px',
                        order: `${(index % 2 === 0 || index === 0) ? 1 : 0}`
                        }}>

                            <p className="font40px">{`${item.projectname}`}</p>
                            <p className="font20px">{`${item.projectdescription}`}</p>
                            <div>
                                <ul className='list-bullets'>
                                    <li className="font16px" style={{alignItems: 'center', fontSize: '22px'}}>
                                        🛠 Stack used: {`${item.stackused}`}
                                    </li>
                                </ul>
                            </div>

                        </div>
        
                </div>
            ))}

        </div>
    )
}