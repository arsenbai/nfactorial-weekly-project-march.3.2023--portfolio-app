import jsonFile from "./data_for_experience/data_for_computer_science_experience.json"

export default function RenderComputerScienceExperience() {

    const arrayOfData = jsonFile.data;
    // console.log(arrayOfData)

    return (
        <>
        {arrayOfData.map((item, index) => (
            <div id="one-position-container" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: '20px',
                }} key={index}>
    
                <div className="font12px" style={{minWidth: '143px', width: '143px'}}>{item.since}-{(item.until === "" || item.until === "now" || item.until === "-") ? "now" : item.until}</div>
    
                <div>
    
                    <div id="item-role-company">
                        <p className="font16px">
                            <span style={{fontSize: '22px', marginRight: '12px', color: '#BE9063'}}>&#9679;</span>
                            {`${item.role} at ${item.company}`}
                        </p>
                    </div>
    
                    <div style={{marginTop: '8px', marginBottom: '16px'}}>
                        <p className="font12px">
                            <span style={{fontSize: '22px', marginRight: '12px', color: 'transparent'}}>&#9679;</span>
                            {`${item.country}, ${item.city}`}
                        </p>
                    </div>
    
                    <p id="item-descr" className="font14px">
                        {(item.description === "") ? "" : item.description}
                    </p>
                </div>
    
            </div>
        ))}
        </>
    )
}