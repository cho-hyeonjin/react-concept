import "./AppProfile.css";
import Profile from "./components/Profile";

export default function AppProfile() {
  return (
    <>
      <Profile
        image="https://statscr.applenovinky.cz/wp-content/uploads/2016/01/SteveJobsSquare-TGJ.jpg"
        name="Steve Jobs"
        title="Apple"
      />
      <Profile
        image="https://assets.bbhub.io/dotorg/sites/64/2023/09/BillGates-Headshot-2022.jpg"
        name="Bill Gates"
        title="Microsoft"
      />
      <Profile
        image="https://hips.hearstapps.com/digitalspyuk.cdnds.net/14/06/2560x2560/square_tech-mark-zuckerberg.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*"
        name="Mark Zuckerberg"
        title="Facebook"
        isNew="true"
      />
    </>
  );
}
