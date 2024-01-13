import ProfileCard from './ProfileCard'

function App()
{
    return (
        <div>
            <div>Personal Digital Assistants</div>

            <ProfileCard title='Alexa' handle='@alexa99' color='red'/>
            <ProfileCard title='Cortana' handle='@cortana32'  color='blue'/>
            <ProfileCard title='Siri' handle='@siri01' color='yellow'/>
        </div>
    );
}

export default App;