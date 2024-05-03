import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button `
  background : yellow;
  color : black;
  padding : 10px
`
let Box = styled.div`
  background : grey;
  padding : 20px;
`

function Detail(props){


  let {id} = useParams();
  let want = props.shoes.find((x) => x.id == id)
  console.log(id);



    return (
      <div className="container">
        <Box>
        <YellowBtn>Button</YellowBtn>
        </Box>
      <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      

      <div className="col-md-6">
        <h4 className="pt-5"></h4>
        <p>{want.title}</p>
        <p>{want.price}원</p>
        <p>{want.content}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div>
    )
  }


  export default Detail;