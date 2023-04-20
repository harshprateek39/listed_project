import './admin.css';
import Heading from './admintools/heading/heading'
import TopBox from './admintools/TopBox/topbox'
import Chart from './admintools/Chart/chart'
import BottomBox from './admintools/BottomBox/bottomBox'
function Admin({click, active}) {
  console.log(active);
  return (
    <div className="mainAdmin">
     <Heading click={click}  active={active}/>
     <TopBox/>
     <Chart/>
     <BottomBox/>
    </div>
  );
}

export default Admin;