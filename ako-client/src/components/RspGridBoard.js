import ButtonGroup from "./ButtonGroup.js";
import '../css/RspGridBoard.css'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

// antd components
import { Button, Space } from 'antd';

import api from '../commonJS/api.js';


function RspGridBoard(prop){
    const [contents, setContents] = useState([]);
    // props.row
    // props.col
    
    const ROW = 1;
    const COL = 3;
    const CARTEOGRY = ['전체', '정치', '경제', '세계', '테크', '노동', '환경', '인권', '문화', '라이프'];

    const { usrNm } = useSelector(state => ({
        usrNm: state.login.usrNm
    }));

    useEffect(()=>{
        api.getPostList("all")
            .then(res=>setContents(res.data))

    }, []);

    useEffect(()=>{
        return ()=>{
            const base64Images = document.querySelectorAll(".postImage");
            Array.from(base64Images).forEach((img)=>{
                api.getBase64Image(img.dataset.file).then(url=>{
                    
                    img.src = `data:image/png;base64,${url}`
                })
            })
        }
    })

    const postlist = contents.map((post)=>{
        return (
            <Link key={post.postId} to={`/post/postdetail/${post.postId}`} className="card">
                <figure>
                {/* data:image/png;base64, ${url} */}
                    <img className="postImage" data-file={post.fileId} src={`${process.env.PUBLIC_URL}/ako/ako_love.png`} alt="temp" />
                </figure>
                <div className="card-body">
                    <h3>{post.postTitle}</h3>
                    <time className="card-date">{post.frstRgstDt}</time>
                    <i className="card-category">{post.unqUsrId}</i>
                </div>
            </Link>
        )
    })

    return (
        <section className={`grid-board ${ usrNm && "header-padding"}`}>
            <ButtonGroup target={CARTEOGRY}/>
            <div className="box">
                {postlist}
            </div>
            <Space style={{width: '100%', justifyContent: "center", marginTop: '25px'}}>
                <Button size="large" style={{padding: "0 50px"}}>더보기</Button>
            </Space>
        </section>
    );
}

export default RspGridBoard;