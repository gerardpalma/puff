import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap'
import './listview.css'
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'


const categoryProducts = {
    1:[
        {img: "image/product/klikit pod1.png",title: "Wonderful Watermelon Ice"},
        {img: "image/product/klikit pod2.png",title: "Whacky Watermelon Strawberry Kiwi Ice"},
        {img: "image/product/klikit pod3.png",title: "Super Strawberry Raspberry Blueberry Ice"},
        {img: "image/product/klikit pod4.png",title: "Ruthless Raspberry Dragon Fruit"},
        {img: "image/product/klikit pod5.png",title: "Pleasant Peach Mango Pineapplee"},
        {img: "image/product/klikit pod6.png",title: "Mystery"},
        {img: "image/product/klikit pod7.png",title: "Mighty Mint Ice"},
        {img: "image/product/klikit pod8.png",title: "Gracious Grape Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    2:[
        {img: "image/product/klikit ful kit1.png",title: "Precious Peachy Strawberry Watermelon"},
        {img: "image/product/klikit ful kit2.png",title: "Glowed Up Green Apple Ice"},
        {img: "image/product/klikit ful kit3.png",title: "Glorious Grape Raspberry Ice"},
        {img: "image/product/klikit ful kit4.png",title: "Boujee Blue Raspberry Cherry Ice"},
        {img: "image/product/klikit ful kit5.png",title: "Bussin’ Blueberry Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    3:[
        {img: "image/product/pod1.png",title: "Woozy Watermelon Cherry"},
        {img: "image/product/pod2.png",title: "Victory Vanilla Custard"},
        {img: "image/product/pod3.png",title: "Tropical Vibes"},
        {img: "image/product/pod4.png",title: "Succulent Strawberry Watermelon"},
        {img: "image/product/pod5.png",title: "Packin’ Peach Ice"},
        {img: "image/product/pod6.png",title: "Magical Mango Ice"},
        {img: "image/product/pod7.png",title: "Ballin’s Watermelon Bubble Gum"},
        {img: "image/product/pod8.png",title: "Ballin’ Sour Bubble Gum"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    4:[
        {img: "image/product/ful1.png",title: "Refreshing Raspberry Watermelon Apple Ice"},
        {img: "image/product/ful2.png",title: "Pretty Peach Blue Raspberry Ice"},
        {img: "image/product/ful3.png",title: "Golden Grape Watermelon Ice"},
        {img: "image/product/ful4.png",title: "Candy Crush"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    5:[
        {img: "image/product/ripper1.png",title: "Wicked Watermelon Peach"},
        {img: "image/product/ripper2.png",title: "Wicked Watermelon Peach"},
        {img: "image/product/ripper3.png",title: "Savage Strawberry Cherry Watermelon"},
        {img: "image/product/ripper4.png",title: "Rippin’ Blueberry Cherry Ice"},
        {img: "image/product/ripper5.png",title: "Ravishing Raspberry Watermelon Ice"},
        {img: "image/product/ripper6.png",title: "Poppin’ Peach Raspberry Ice"},
        {img: "image/product/ripper7.png",title: "Perky Peach Mango Guava Ice"},
        {img: "image/product/ripper8.png",title: "Passionate Passion Fruit Lemon Peach Ice"},
        {img: "image/product/ripper9.png",title: "Mighty Mango Peach Ice"},
        {img: "image/product/ripper10.png",title: "Mad Mango Peach Watermelon Ice"},
        {img: "image/product/ripper11.png",title: "Hyper"},
        {img: "image/product/ripper12.png",title: "Groovy Guava Passion Fruit Kiwi Ice"},
        {img: "image/product/ripper13.png",title: "Groovy Grape Cherry"},
        {img: "image/product/ripper14.png",title: "Gracious Grape Watermelon Ice"},
        {img: "image/product/ripper15.png",title: "Glamy Grape Honeydew"},
        {img: "image/product/ripper16.png",title: "Classic Cherry Ice"},
        {img: "image/product/ripper17.png",title: "Boujee Blackberry Raspberry Acai"},
        {img: "image/product/ripper18.png",title: "Bomb Blue Razz Ice"},
        {img: "image/product/ripper19.png",title: "Blessed Blue Lemon Ice"},
        {img: "image/product/ripper20.png",title: "Ballin’ Strawberry Watermelon"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    6:[
        {img: "image/product/ripper1.png",title: "Wicked Watermelon Peach"},
        {img: "image/product/ripper2.png",title: "Wicked Watermelon Peach"},
        {img: "image/product/ripper3.png",title: "Savage Strawberry Cherry Watermelon"},
        {img: "image/product/ripper4.png",title: "Rippin’ Blueberry Cherry Ice"},
        {img: "image/product/ripper5.png",title: "Ravishing Raspberry Watermelon Ice"},
        {img: "image/product/ripper6.png",title: "Poppin’ Peach Raspberry Ice"},
        {img: "image/product/ripper7.png",title: "Perky Peach Mango Guava Ice"},
        {img: "image/product/ripper8.png",title: "Passionate Passion Fruit Lemon Peach Ice"},
        {img: "image/product/ripper9.png",title: "Mighty Mango Peach Ice"},
        {img: "image/product/ripper10.png",title: "Mad Mango Peach Watermelon Ice"},
        {img: "image/product/ripper11.png",title: "Hyper"},
        {img: "image/product/ripper12.png",title: "Groovy Guava Passion Fruit Kiwi Ice"},
        {img: "image/product/ripper13.png",title: "Groovy Grape Cherry"},
        {img: "image/product/ripper14.png",title: "Gracious Grape Watermelon Ice"},
        {img: "image/product/ripper15.png",title: "Glamy Grape Honeydew"},
        {img: "image/product/ripper16.png",title: "Classic Cherry Ice"},
        {img: "image/product/ripper17.png",title: "Boujee Blackberry Raspberry Acai"},
        {img: "image/product/ripper18.png",title: "Bomb Blue Razz Ice"},
        {img: "image/product/ripper19.png",title: "Blessed Blue Lemon Ice"},
        {img: "image/product/ripper20.png",title: "Ballin’ Strawberry Watermelon"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    7:[
        {img: "image/product/liquid1.png",title: "Bubbly Blueberry Ice"},
        {img: "image/product/liquid2.png",title: "Boujie Blue Razz Blackberry"},
        {img: "image/product/liquid3.png",title: "Blazin’ Blue Razz Peach Ice"},
        {img: "image/product/liquid4.png",title: "Bangin’ Blue Razz Cherry Lemon"},
        {img: "image/product/liquid5.png",title: "Whacky Watermelon Strawberry Kiwi"},
        {img: "image/product/liquid6.png",title: "Twisted Melons"},
        {img: "image/product/liquid7.png",title: "Terrific Tobacco And Cream"},
        {img: "image/product/liquid8.png",title: "Righteous Blue Razz Ice"},
        {img: "image/product/liquid9.png",title: "Radical Rainbow Skit"},
        {img: "image/product/liquid10.png",title: "Perky Peachy Mango Banana"},
        {img: "image/product/liquid11.png",title: "Luscious Blue Razz Grape Lemon"},
        {img: "image/product/liquid12.png",title: "Lit Strawberry Raspberry Blueberry Ice"},
        {img: "image/product/liquid13.png",title: "Groovy Grape Peach Cherry Ice"},
        {img: "image/product/liquid14.png",title: "Glitzy Grape Raspberry Ice"},
        {img: "image/product/liquid15.png",title: "Dapper Pepper"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    8:[
        {img: "image/product/liquidg1_1.png",title: "Slick Strawberry Raspberry Cherry Ice"},
        {img: "image/product/liquidg1_2.png",title: "Primo Peach Ice"},
        {img: "image/product/liquidg1_3.png",title: "Grande Grape Blueberry Ice"},
        {img: "image/product/liquidg1_4.png",title: "Delicious Dry Tobacco"},
        {img: "image/product/liquidg1_5.png",title: "Classic Caramel Waffle Cappuccino Ice"},
        {img: "image/product/liquidg1_6.png",title: "Yummy Mango Strawberry Ice"},
        {img: "image/product/liquidg1_7.png",title: "Wow Watermelon Grape Ice"},
        {img: "image/product/liquidg1_8.png",title: "Wild Watermelon Ice"},
        {img: "image/product/liquidg1_9.png",title: "Terrific Tobacco And Cream"},
        {img: "image/product/liquidg1_10.png",title: "Summer Strawberry Kiwi Ice"},
        {img: "image/product/liquidg1_11.png",title: "Sic Strawberry Watermelon Ice"},
        {img: "image/product/liquidg1_12.png",title: "Mojo Mango Peach Ice"},
        {img: "image/product/liquidg1_13.png",title: "Max Mango Ice"},
        {img: "image/product/liquidg1_14.png",title: "Luscious Lychee Ice"},
        {img: "image/product/liquidg1_15.png",title: "Glow Grape Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    9:[
        {img: "image/product/liquidg2_1.png",title: "Slick Strawberry Raspberry Cherry Ice"},
        {img: "image/product/liquidg2_2.png",title: "Primo Peach Ice"},
        {img: "image/product/liquidg2_3.png",title: "Grande Grape Blueberry Ice"},
        {img: "image/product/liquidg2_4.png",title: "Delicious Dry Tobacco"},
        {img: "image/product/liquidg2_5.png",title: "Classic Caramel Waffle Cappuccino Ice"},
        {img: "image/product/liquidg2_6.png",title: "Yummy Mango Strawberry Ice"},
        {img: "image/product/liquidg2_7.png",title: "Wow Watermelon Grape Ice"},
        {img: "image/product/liquidg2_8.png",title: "Wild Watermelon Ice"},
        {img: "image/product/liquidg2_9.png",title: "Terrific Tobacco And Cream"},
        {img: "image/product/liquidg2_10.png",title: "Summer Strawberry Kiwi Ice"},
        {img: "image/product/liquidg2_11.png",title: "Sic Strawberry Watermelon Ice"},
        {img: "image/product/liquidg2_12.png",title: "Mojo Mango Peach Ice"},
        {img: "image/product/liquidg2_13.png",title: "Max Mango Ice"},
        {img: "image/product/liquidg2_14.png",title: "Luscious Lychee Ice"},
        {img: "image/product/liquidg2_15.png",title: "Glow Grape Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    10:[
        {img: "image/product/liquidg3_1.png",title: "Yummy Mango Strawberry Ice"},
        {img: "image/product/liquidg3_2.png",title: "Wow Watermelon Grape Ice"},
        {img: "image/product/liquidg3_3.png",title: "Wild Watermelon Ice"},
        {img: "image/product/liquidg3_4.png",title: "Summer Strawberry Kiwi Ice"},
        {img: "image/product/liquidg3_5.png",title: "Sic Strawberry Watermelon Ice"},
        {img: "image/product/liquidg3_6.png",title: "Mojo Mango Peach Ice"},
        {img: "image/product/liquidg3_7.png",title: "Max Mango Ice"},
        {img: "image/product/liquidg3_8.png",title: "Luscious Lychee Ice"},
        {img: "image/product/liquidg3_9.png",title: "Glow Grape Ice"},
        {img: "image/product/liquidg3_10.png",title: "Classic Caramel Waffle Cappuccino Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    11:[
        {img: "image/product/liquidg4_1.png",title: "Yummy Mango Strawberry Ice"},
        {img: "image/product/liquidg4_2.png",title: "Wow Watermelon Grape Ice"},
        {img: "image/product/liquidg4_3.png",title: "Wild Watermelon Ice"},
        {img: "image/product/liquidg4_4.png",title: "Summer Strawberry Kiwi Ice"},
        {img: "image/product/liquidg4_5.png",title: "Sic Strawberry Watermelon Ice"},
        {img: "image/product/liquidg4_6.png",title: "Mojo Mango Peach Ice"},
        {img: "image/product/liquidg4_7.png",title: "Max Mango Ice"},
        {img: "image/product/liquidg4_8.png",title: "Luscious Lychee Ice"},
        {img: "image/product/liquidg4_9.png",title: "Glow Grape Ice"},
        {img: "image/product/liquidg4_10.png",title: "Classic Caramel Waffle Cappuccino Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    12:[
        {img: "image/product/liquidg5_1.png",title: "Boujie Blue Razz Blackberry"},
        {img: "image/product/liquidg5_2.png",title: "Blazin' Blue Razz Peach Ice"},
        {img: "image/product/liquidg5_3.png",title: "Bangin' Blue Razz Cherry Lemon"},
        {img: "image/product/liquidg5_4.png",title: "Whacky Watermelon Strawberry Kiwi"},
        {img: "image/product/liquidg5_5.png",title: "Terrific Tobacco And Cream"},
        {img: "image/product/liquidg5_6.png",title: "Righteous Blue Razz Ice"},
        {img: "image/product/liquidg5_7.png",title: "Radical Rainbow Skit"},
        {img: "image/product/liquidg5_8.png",title: "Perky Peachy Mango Bananae"},
        {img: "image/product/liquidg5_9.png",title: "Luscious Blue Razz Grape Lemon"},
        {img: "image/product/liquidg5_10.png",title: "Groovy Grape Peach Cherry Ice"},
        {img: "image/product/liquidg5_11.png",title: "Lit Strawberry Raspberry Blueberry Ice"},
        {img: "image/product/liquidg5_12.png",title: "Glitzy Grape Raspberry Ice"},
        {img: "image/product/liquidg5_13.png",title: "Dapper Pepper"},
        {img: "image/product/liquidg5_14.png",title: "Classic Vanilla Ice"},
        {img: "image/product/liquidg5_15.png",title: "Bubbly Blueberry Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    13:[
        {img: "image/product/liquidg5_1.png",title: "Boujie Blue Razz Blackberry"},
        {img: "image/product/liquidg5_2.png",title: "Blazin' Blue Razz Peach Ice"},
        {img: "image/product/liquidg5_3.png",title: "Bangin' Blue Razz Cherry Lemon"},
        {img: "image/product/liquidg5_4.png",title: "Whacky Watermelon Strawberry Kiwi"},
        {img: "image/product/liquidg5_5.png",title: "Terrific Tobacco And Cream"},
        {img: "image/product/liquidg5_6.png",title: "Righteous Blue Razz Ice"},
        {img: "image/product/liquidg5_7.png",title: "Radical Rainbow Skit"},
        {img: "image/product/liquidg5_8.png",title: "Perky Peachy Mango Bananae"},
        {img: "image/product/liquidg5_9.png",title: "Luscious Blue Razz Grape Lemon"},
        {img: "image/product/liquidg5_10.png",title: "Groovy Grape Peach Cherry Ice"},
        {img: "image/product/liquidg5_11.png",title: "Lit Strawberry Raspberry Blueberry Ice"},
        {img: "image/product/liquidg5_12.png",title: "Glitzy Grape Raspberry Ice"},
        {img: "image/product/liquidg5_13.png",title: "Dapper Pepper"},
        {img: "image/product/liquidg5_14.png",title: "Classic Vanilla Ice"},
        {img: "image/product/liquidg5_15.png",title: "Bubbly Blueberry Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    14:[
        {img: "image/product/liquidg2_1.png",title: "Slick Strawberry Raspberry Cherry Ice"},
        {img: "image/product/liquidg2_2.png",title: "Primo Peach Ice"},
        {img: "image/product/liquidg2_3.png",title: "Grande Grape Blueberry Ice"},
        {img: "image/product/liquidg2_4.png",title: "Delicious Dry Tobacco"},
        {img: "image/product/liquidg2_5.png",title: "Classic Caramel Waffle Cappuccino Ice"},
        {img: "image/product/liquidg2_6.png",title: "Yummy Mango Strawberry Ice"},
        {img: "image/product/liquidg2_7.png",title: "Wow Watermelon Grape Ice"},
        {img: "image/product/liquidg2_8.png",title: "Wild Watermelon Ice"},
        {img: "image/product/liquidg2_9.png",title: "Terrific Tobacco And Cream"},
        {img: "image/product/liquidg2_10.png",title: "Summer Strawberry Kiwi Ice"},
        {img: "image/product/liquidg2_11.png",title: "Sic Strawberry Watermelon Ice"},
        {img: "image/product/liquidg2_12.png",title: "Mojo Mango Peach Ice"},
        {img: "image/product/liquidg2_13.png",title: "Max Mango Ice"},
        {img: "image/product/liquidg2_14.png",title: "Luscious Lychee Ice"},
        {img: "image/product/liquidg2_15.png",title: "Glow Grape Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    15:[
        {img: "image/product/dg1_1.png",title: "Whacky Watermelon Strawberry Kiwi"},
        {img: "image/product/dg1_2.png",title: "Twisted Melons"},
        {img: "image/product/dg1_3.png",title: "Righteous Blue Razz Ice"},
        {img: "image/product/dg1_4.png",title: "Radical Rainbowo"},
        {img: "image/product/dg1_5.png",title: "ManPerky Peachy Mango Bananago Guava Black Currant"},
        {img: "image/product/dg1_6.png",title: "Luscious Blue Razz Grape Lemon"},
        {img: "image/product/dg1_7.png",title: "LIT Strawberry Raspberry Blueberry Ice"},
        {img: "image/product/dg1_8.png",title: "Groovy Grape Peach Cherry Ice"},
        {img: "image/product/dg1_9.png",title: "Grape Ice"},
        {img: "image/product/dg1_10.png",title: "Glitzy Grape Raspberry Ice"},
        {img: "image/product/dg1_11.png",title: "Extreme Mint"},
        {img: "image/product/dg1_12.png",title: "Dapper Pepper"},
        {img: "image/product/dg1_13.png",title: "Bubbly Blueberry Ice"},
        {img: "image/product/dg1_14.png",title: "Boujee Blue Razz Blackberry"},
        {img: "image/product/dg1_15.png",title: "Blazin’ Blue Razz Peach Ice"},
        {img: "image/product/dg1_16.png",title: "Bangin’ Blue Razz Cherry Lemon"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    16:[
        {img: "image/product/dg2_1.png",title: "Watermelon Honeydew Cantaloupe"},
        {img: "image/product/dg2_2.png",title: "Strawberry Raspberry Black Cherry"},
        {img: "image/product/dg2_3.png",title: "Strawberry Kiwi Banana"},
        {img: "image/product/dg2_4.png",title: "Raspberry Cherry Grape Ice"},
        {img: "image/product/dg2_5.png",title: "Mango Guava Black Currant"},
        {img: "image/product/dg2_6.png",title: "Grapefruit Passion Fruit"},
        {img: "image/product/dg2_7.png",title: "Wonderful Watermelon Ice"},
        {img: "image/product/dg2_8.png",title: "Double Cherry"},
        {img: "image/product/dg2_9.png",title: "Blue Razz Peach Jasmine"},
        {img: "image/product/dg2_10.png",title: "Blue Raspberry Cherry Lemon"},
        {img: "image/product/dg2_11.png",title: "Apple Watermelon Twist Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    17:[
        {img: "image/product/dg2_1.png",title: "Watermelon Honeydew Cantaloupe"},
        {img: "image/product/dg2_2.png",title: "Strawberry Raspberry Black Cherry"},
        {img: "image/product/dg2_3.png",title: "Strawberry Kiwi Banana"},
        {img: "image/product/dg2_4.png",title: "Raspberry Cherry Grape Ice"},
        {img: "image/product/dg2_5.png",title: "Mango Guava Black Currant"},
        {img: "image/product/dg2_6.png",title: "Grapefruit Passion Fruit"},
        {img: "image/product/dg2_7.png",title: "Wonderful Watermelon Ice"},
        {img: "image/product/dg2_8.png",title: "Double Cherry"},
        {img: "image/product/dg2_9.png",title: "Blue Razz Peach Jasmine"},
        {img: "image/product/dg2_10.png",title: "Blue Raspberry Cherry Lemon"},
        {img: "image/product/dg2_11.png",title: "Apple Watermelon Twist Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    18:[
        {img: "image/product/dg4_1.png",title: "Twisted Melons"},
        {img: "image/product/dg4_2.png",title: "Whacky Watermelon Strawberry Kiwi"},
        {img: "image/product/dg4_3.png",title: "Righteous Blueberry Raspberry Ice"},
        {img: "image/product/dg4_4.png",title: "Radical Rainbow SKIT"},
        {img: "image/product/dg4_5.png",title: "Perky Peachy Mango Banana"},
        {img: "image/product/dg4_6.png",title: "Luscious Blue Razz Grape Lemon"},
        {img: "image/product/dg4_7.png",title: "LIT Strawberry Raspberry Blueberry Ice"},
        {img: "image/product/dg4_8.png",title: "Groovy Grape Peach Cherry Ice"},
        {img: "image/product/dg4_9.png",title: "Glitzy Grape Raspberry Ice"},
        {img: "image/product/dg4_10.png",title: "Fizzy Vanilla Cola Ice"},
        {img: "image/product/dg4_11.png",title: "Deluxe Double Mint"},
        {img: "image/product/dg4_12.png",title: "Dapper Doc. Pepper"},
        {img: "image/product/dg4_13.png",title: "Bubbly Blueberry Bubble Gum Ice"},
        {img: "image/product/dg4_14.png",title: "Bougie Blue Razz Blackberry"},
        {img: "image/product/dg4_15.png",title: "Blazin’ Blue Razz Peach Ice"},
        {img: "image/product/dg4_16.png",title: "Grape Ice"},
        {img: "image/product/dg4_17.png",title: "Radical Rainbow SKIT"},
        {img: "image/product/dg4_18.png",title: "Watermelon Honeydew Cantaloupe"},
        {img: "image/product/dg4_19.png",title: "Strawberry Raspberry Blueberry Ice"},
        {img: "image/product/dg4_20.png",title: "Peach Mango Banana"},
        {img: "image/product/dg4_21.png",title: "Grape Blue Raspberry Ice"},
        {img: "image/product/dg4_22.png",title: "Blueberry Raspberry Ice"},
        {img: "image/product/dg4_23.png",title: "Blueberry Mango Lychee"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    19:[
        {img: "image/product/dg5_1.png",title: "Peach Ice"},
        {img: "image/product/dg5_2.png",title: "Iced Coffee"},
        {img: "image/product/dg5_3.png",title: "Grape Peach Cherry"},
        {img: "image/product/dg5_4.png",title: "Dapper Pepper"},
        {img: "image/product/dg5_5.png",title: "Bubbly Blueberry Ice"},
        {img: "image/product/dg5_6.png",title: "Blue Razz Peach Ice"},
        {img: "image/product/dg5_7.png",title: "Extreme Mint"},
        {img: "image/product/dg5_8.png",title: "Tobacco"},
        {img: "image/product/dg5_9.png",title: "Watermelon Strawberry Kiwi Ice"},
        {img: "image/product/dg5_10.png",title: "Radical Rainbow SKIT"},
        {img: "image/product/dg5_11.png",title: "Pineapple Peach Mango"},
        {img: "image/product/dg5_12.png",title: "Green Apple Grape Ice"},
        {img: "image/product/dg5_13.png",title: "Classic Vanilla Ice"},
        {img: "image/product/dg5_14.png",title: "Blue Raspberry Cherry Lemon Ice"},
        {img: "image/product/dg5_15.png",title: "Apple Peach"},
        {img: "image/product/dg5_16.png",title: "Watermelon Blueberry Blackcurrant Ice"},
        {img: "image/product/dg5_17.png",title: "Strawberry Raspberry Cherry"},
        {img: "image/product/dg5_18.png",title: "Strawberry Raspberry Blueberry Ice"},
        {img: "image/product/dg5_19.png",title: "Pineapple Coconut Banana Ice"},
        {img: "image/product/dg5_20.png",title: "Peach Mango banana"},
        {img: "image/product/dg5_21.png",title: "Passion Fruit Pineapple Mango Banana"},
        {img: "image/product/dg5_22.png",title: "Mango Ice"},
        {img: "image/product/dg5_23.png",title: "Grape Peach Cherry Ice"},
        {img: "image/product/dg5_24.png",title: "Grape Ice"},
        {img: "image/product/dg5_25.png",title: "Grape Blue Raspberry Ice"},
        {img: "image/product/dg5_26.png",title: "Cherry Orange Grape Pineapple"},
        {img: "image/product/dg5_27.png",title: "Blueberry Raspberry Ice"},
        {img: "image/product/dg5_28.png",title: "Blueberry Mango Lychee"},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    20:[
        {img: "image/product/dg6_1.png",title: "Strawberry Raspberry Cherry"},
        {img: "image/product/dg6_2.png",title: "Strawberry Raspberry Blueberry Ice"},
        {img: "image/product/dg6_3.png",title: "Pineapple Coconut Banana Ice"},
        {img: "image/product/dg6_4.png",title: "Peach Mango Banana"},
        {img: "image/product/dg6_5.png",title: "Passion Fruit Pineapple Mango Banana"},
        {img: "image/product/dg6_6.png",title: "Grape Peach Cherry"},
        {img: "image/product/dg6_7.png",title: "Grape Blue Raspberry Ice"},
        {img: "image/product/dg6_8.png",title: "Cherry Orange Grape Pineapple"},
        {img: "image/product/dg6_9.png",title: "Blueberry Mango Lychee"},
        {img: "image/product/dg6_10.png",title: "Blue Raspberry Cherry Lemon Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    21:[
        {img: "image/product/dg7_1.png",title: "Grape Ice"},
        {img: "image/product/dg7_2.png",title: "Watermelon Honeydew Cantaloupe Ice"},
        {img: "image/product/dg7_3.png",title: "Strawberry Raspberry Lychee Ice"},
        {img: "image/product/dg7_4.png",title: "Strawberry Raspberry Blueberry Ice"},
        {img: "image/product/dg7_5.png",title: "Peach Mango Banana Ice"},
        {img: "image/product/dg7_6.png",title: "Mango Ice"},
        {img: "image/product/dg7_7.png",title: "Mango Guava Blackcurrant Ice"},
        {img: "image/product/dg7_8.png",title: "Grape Blue Raspberry Ice"},
        {img: "image/product/dg7_9.png",title: "Blueberry Mango Lychee Ice"},
        {img: "image/product/dg7_10.png",title: "Blue Razz Peach Jasmine Ice"},
        {img: "image/product/dg7_11.png",title: "Apple Watermelon Twist Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
    22:[
        {img: "image/product/dg8_1.png",title: "Whacky Watermelon Strawberry Kiwi"},
        {img: "image/product/dg8_2.png",title: "Righteous Blueberry Raspberry Ice"},
        {img: "image/product/dg8_3.png",title: "Twisted Melons"},
        {img: "image/product/dg8_4.png",title: "Radical Rainbow SKIT"},
        {img: "image/product/dg8_5.png",title: "Perky Peachy Mango Bananae"},
        {img: "image/product/dg8_6.png",title: "Luscious Blue Razz Grape Lemon"},
        {img: "image/product/dg8_7.png",title: "LIT Strawberry Raspberry Blueberry Ice"},
        {img: "image/product/dg8_8.png",title: "Groovy Grape Peach Cherry Ice"},
        {img: "image/product/dg8_9.png",title: "Glitzy Grape Raspberry Ice"},
        {img: "image/product/dg8_10.png",title: "Fizzy Vanilla Cola Ice"},
        {img: "image/product/dg8_11.png",title: "Deluxe Double Mint"},
        {img: "image/product/dg8_12.png",title: "Dapper Doc. Pepper"},
        {img: "image/product/dg8_13.png",title: "Bubbly Blueberry Bubble Gum Ice"},
        {img: "image/product/dg8_14.png",title: "Bougie Blue Razz Blackberry"},
        {img: "image/product/dg8_15.png",title: "Blazin’ Blue Razz Peach Ice"},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
        {img: "",title: ""},
    ],
}
const categoryImg = {
    1: {
        img: "image/product/kp1.png", title: "Klikit Pod", description: "UP TO 5000 PUFFS 5%"
    },
    2: {
        img: "image/product/fk1.png", title: "Klikit Full Kit", description: "Up to 5000 puffs 5%"
    },
    3: {  
        img: "image/product/kp2.png", title: "Klikit Pod", description: "Up to 7000 puffs 5%"
    },
    4: {
        img: "image/product/fk2.png", title: "Klikit Full Kit", description: "Up to 5000 puffs 5%"
    },
    5: {
        img: "image/product/rippergroup1.png", title: "Ripper by Ruffpuff", description: "Up to 6000 puffs 2%"
    },
    6: {
        img: "image/product/rippergroup2.png", title: "Ripper by Ruffpuff", description: "Up to 6000 puffs 5%"
    },
    7: {
        img: "image/product/Liquid.png", title: "Premium E-liquid", description: "10MG - 30ML"
    },
    8: {
        img: "image/product/Liquidgroup1.png", title: "Premium E-liquid", description: "20MG - 30ML"
    },
    9: {
        img: "image/product/Liquidgroup2.png", title: "Premium E-liquid", description: "35MG - 30ML"
    },
    10: {
        img: "image/product/Liquidgroup3.png", title: "Premium E-liquid", description: "3MG-60ML"
    },
    11: {
        img: "image/product/Liquidgroup4.png", title: "Premium E-liquid", description: "6MG-60ML"
    },
    12: {
        img: "image/product/Liquidgroup5.png", title: "Premium E-liquid", description: "10MG - 60ML"
    },
    13: {
        img: "image/product/Liquidgroup6.png", title: "Premium E-liquid", description: "20MG - 60ML"
    },
    14: {
        img: "image/product/Liquidgroup7.png", title: "Premium E-liquid", description: "50MG - 30ML"
    },
    15: {
        img: "image/product/Disposablegroup1.png", title: "Disposable", description: "Up to 4500 Puffs 2%(Bold)"
    },
    16: {
        img: "image/product/Disposablegroup2.png", title: "Disposable", description: "Up to 4500 Puffs 2% (Regular)"
    },
    17: {
        img: "image/product/Disposablegroup3.png", title: "Disposable", description: "Up to 4500 Puffs 2%(Bold)"
    },
    18: {
        img: "image/product/Disposablegroup4.png", title: "Disposable", description: "up to 7500 puffs 0% (Regular)"
    },
    19: {
        img: "image/product/Disposablegroup5.png", title: "Disposable", description: "up to 7500 puffs 2% (Regular)"
    },
    20: {
        img: "image/product/Disposablegroup6.png", title: "Disposable", description: "up to 7500 puffs 2% (Bold)"
    },
    21: {
        img: "image/product/Disposablegroup7.png", title: "Disposable", description: "up to 7500 puffs 4% (Regular)"
    },
    22: {
        img: "image/product/Disposablegroup8.png", title: "Disposable", description: "up to 7500 puffs 5% (Regular)"
    },
}

function Listview() {

    const location = useLocation()
    const { categoryId } = location.state

    useEffect(() => {
        console.log("categoryId-------------", categoryId)
    })
    return(
        
        <div className='form'>
            {/* <Row className='paddingDefault'></Row>
                <Col xl={6} sm={6} md={6} lg={6} ></Col>
                <Row className='paddingDefault'></Row> */}
            <Row className='paddingDefault'>
                <div className='viewcenter'>
                    <img src={categoryImg[categoryId].img}></img>
                </div>
            </Row>
            <Row className='paddingDefault'>
                <div className='viewcenter'>
                    <p className='listview_title'>{categoryImg[categoryId].title}</p>
                </div>
            </Row>
            <Row className='paddingDefault'>
                <div className='viewcenter listview_bottom'>
                    <p className='listview_title1'>{categoryImg[categoryId].description}</p>
                </div>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: categoryId, img: categoryProducts[categoryId][0].img, title: categoryProducts[categoryId][0].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][0].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][0].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "2", img: categoryProducts[categoryId][1].img, title: categoryProducts[categoryId][1].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][1].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][1].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "3", img: categoryProducts[categoryId][2].img, title: categoryProducts[categoryId][2].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][2].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][2].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "4", img: categoryProducts[categoryId][3].img, title: categoryProducts[categoryId][3].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][3].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][3].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "5", img: categoryProducts[categoryId][4].img, title: categoryProducts[categoryId][4].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][4].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][4].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "6", img: categoryProducts[categoryId][5].img, title: categoryProducts[categoryId][5].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][5].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][5].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "7", img: categoryProducts[categoryId][6].img, title: categoryProducts[categoryId][6].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][6].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][6].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "8", img: categoryProducts[categoryId][7].img, title: categoryProducts[categoryId][7].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][7].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][7].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "9", img: categoryProducts[categoryId][8].img, title: categoryProducts[categoryId][8].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][8].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][8].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "10", img: categoryProducts[categoryId][9].img, title: categoryProducts[categoryId][9].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][9].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][9].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "11", img: categoryProducts[categoryId][10].img, title: categoryProducts[categoryId][10].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][10].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][10].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "12", img: categoryProducts[categoryId][11].img, title: categoryProducts[categoryId][11].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][11].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][11].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "13", img: categoryProducts[categoryId][12].img, title: categoryProducts[categoryId][12].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][12].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][12].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "14", img: categoryProducts[categoryId][13].img, title: categoryProducts[categoryId][13].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][13].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][13].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "15", img: categoryProducts[categoryId][14].img, title: categoryProducts[categoryId][14].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][14].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][14].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "16", img: categoryProducts[categoryId][15].img, title: categoryProducts[categoryId][15].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][15].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][15].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "17", img: categoryProducts[categoryId][16].img, title: categoryProducts[categoryId][16].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][16].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][16].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "18", img: categoryProducts[categoryId][17].img, title: categoryProducts[categoryId][17].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][17].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][17].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "19", img: categoryProducts[categoryId][18].img, title: categoryProducts[categoryId][18].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][18].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][18].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "20", img: categoryProducts[categoryId][19].img, title: categoryProducts[categoryId][19].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][19].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][19].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "21", img: categoryProducts[categoryId][20].img, title: categoryProducts[categoryId][20].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][20].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][20].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "22", img: categoryProducts[categoryId][21].img, title: categoryProducts[categoryId][21].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][21].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][21].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "23", img: categoryProducts[categoryId][22].img, title: categoryProducts[categoryId][22].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][22].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][22].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "24", img: categoryProducts[categoryId][23].img, title: categoryProducts[categoryId][23].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][23].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][23].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "25", img: categoryProducts[categoryId][24].img, title: categoryProducts[categoryId][24].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][24].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][24].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "26", img: categoryProducts[categoryId][25].img, title: categoryProducts[categoryId][25].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][25].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][25].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "27", img: categoryProducts[categoryId][26].img, title: categoryProducts[categoryId][26].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][26].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][26].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
            </Row>
            <Row className='paddingDefault'>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "28", img: categoryProducts[categoryId][27].img, title: categoryProducts[categoryId][27].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][27].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][27].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "29", img: categoryProducts[categoryId][28].img, title: categoryProducts[categoryId][28].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][28].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][28].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
                <Col xl={4} sm={4} md={4} lg={4}>
                    <Link to="/itemview" state={{ categoryId: categoryId, itemId: "30", img: categoryProducts[categoryId][29].img, title: categoryProducts[categoryId][29].title }}>
                        <Row className='paddingDefault'>
                            <div className='viewcenter'>
                                <img src={categoryProducts[categoryId][29].img}></img>
                            </div>
                        </Row>
                        <Row className='paddingDefault'>
                            <div className='viewcenter listview_itembottom'>
                                <p className='listview_description'>{categoryProducts[categoryId][29].title}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>
            </Row>
        </div>
             
    )       
}
export default Listview;