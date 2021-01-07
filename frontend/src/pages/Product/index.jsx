import React from 'react';
import BookCard from "./BookCard";
import { Grid } from "@material-ui/core";
Product.propTypes = {
    
};

function Product(props) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
                <BookCard 
                title="Đi Tìm Lẽ Sống" 
                subtitle="Viktor Emil Frankl"
                imgSrc="https://salt.tikicdn.com/cache/280x280/ts/product/80/14/8b/61fb657f347d14d9d7bf6fe901001a8e.jpg"
                description="78.000 ₫ -40%"
                /> 
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <BookCard 
                title="Giới Hạn Của Bạn Chỉ Là Xuất Phát Điểm Của Tôi" 
                subtitle="Mèo Maverick"
                imgSrc="https://salt.tikicdn.com/cache/280x280/ts/product/c3/32/a2/6e076a9087583e35575486c5cbc45ffa.jpg"
                description="82.000 ₫ -33%"
                /> 
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <BookCard 
                title="Bố Già" 
                subtitle="Mario Puzo"
                imgSrc="https://salt.tikicdn.com/cache/280x280/ts/product/a6/39/ca/7eca66c10e5f99f14325733bf53aa425.jpg"
                description="110.000 ₫ -40%"
                /> 
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <BookCard 
                title="Think And Grow Rich - 13 Nguyên Tắc Nghĩ Giàu Làm Giàu " 
                subtitle="Napoleon Hill"
                imgSrc="https://salt.tikicdn.com/cache/280x280/ts/product/f2/ca/f4/3fb83e3ef809a8fd8498e7c9aaf16658.jpg"
                description="110.000 ₫ -30%"
                /> 
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <BookCard 
                title="Chuyện Con Mèo Dạy Hải Âu Bay " 
                subtitle="Luis Sepulveda"
                imgSrc="https://salt.tikicdn.com/cache/280x280/ts/product/a9/e4/f9/9a0900b2352c6d7a608e003146ccda7e.jpg"
                description="49.000 ₫ -35%"
                /> 
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <BookCard 
                title="Nhà Lãnh Đạo Không Chức Danh  " 
                subtitle="Robin Sharma"
                imgSrc="https://salt.tikicdn.com/cache/280x280/media/catalog/product/n/h/nhalanhdao.u2769.d20170307.t090846.484463.jpg"
                description="80.000 ₫ -35%"
                /> 
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <BookCard 
                title="Nhà Lãnh Đạo Không Chức Danh  " 
                subtitle="Robin Sharma"
                imgSrc="https://salt.tikicdn.com/cache/280x280/media/catalog/product/n/h/nhalanhdao.u2769.d20170307.t090846.484463.jpg"
                description="80.000 ₫ -35%"
                /> 
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <BookCard 
                title="Nhà Lãnh Đạo Không Chức Danh  " 
                subtitle="Robin Sharma"
                imgSrc="https://salt.tikicdn.com/cache/280x280/media/catalog/product/n/h/nhalanhdao.u2769.d20170307.t090846.484463.jpg"
                description="80.000 ₫ -35%"
                /> 
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <BookCard 
                title="Nhà Lãnh Đạo Không Chức Danh  " 
                subtitle="Robin Sharma"
                imgSrc="https://salt.tikicdn.com/cache/280x280/media/catalog/product/n/h/nhalanhdao.u2769.d20170307.t090846.484463.jpg"
                description="80.000 ₫ -35%"
                /> 
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <BookCard 
                title="Nhà Lãnh Đạo Không Chức Danh  " 
                subtitle="Robin Sharma"
                imgSrc="https://salt.tikicdn.com/cache/280x280/media/catalog/product/n/h/nhalanhdao.u2769.d20170307.t090846.484463.jpg"
                description="80.000 ₫ -35%"
                /> 
            </Grid>
        </Grid>
        
    );
}

export default Product;