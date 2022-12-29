import styled from 'styled-components';

export const Container = styled.div`
  /* border: 2px solid #e5e7eb; */
  margin: 30px;
  .row {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;

    @media (max-width: 640px) {
      display: grid;
      grid-template-columns: none;
    }
  }

  .image {
    background: #50A7FF;
    position: relative;
    flex: 1;
    max-width: 460px;
    height: 260px;
    margin: 20px;
    overflow: hidden;

    @media (max-width: 640px) {
      max-width: 360px;
      height: 164px;
      margin: 10px;
    }
  }

  .image img {
    opacity: 0.8;
    position: relative;
    vertical-align: top;
    transition: 0.6s;
    transition-property: opacity;
  }

  .image:hover img {
    opacity: 0;
  }
  
  .image .details{
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    width: 100%;
    height: 100%;
  }

  .image .details h3 {
    text-align: center;
    font-size: 35px;
    font-weight: 600;
    margin-top: 70px;
    opacity: 0;
    transition: 0.4s;
    transition-property: opacity, transform;

    @media (max-width: 640px) {
      font-size: 20px;
      font-weight: 600;
      margin-top: 40px;
    }
  }

  .image:hover .details h3 {
    opacity: 1;
    transform: translateY(-30px)
  }

  .image .details p {
    margin: 30px 30px 0 30px;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    opacity: 0;
    transition: 0.6s;
    transition-property: opacity, transform;
    
    @media (max-width: 640px) {
      margin: 20px 20px 0 20px;
      font-size: 20px;
      font-weight: 600;
    }
  }

  .image:hover .details p {
    opacity: 1;
    transform: translateY(-30px)
  }

  .image .details a {
    font-size: 35px;
    opacity: 0;
    transition: 0.6s;
    transition-property: opacity, transform;
  }

  .image:hover .details a {
    opacity: 1;
    transform: translateY(-40px)
  }

  .links {
    display: flex;
    flex-direction: row;
    border: 2;
  }

  .links a {
    margin: 0 auto;
    margin-top: 30px;

    @media (max-width: 640px) {
      margin-top: 22px;
    }
  }

  @media (max-width: 1080px) {
    .image{
      flex: 100%;
      max-width: 480px;
    }
  }

  @media (max-width: 400px) {
    .image .details p {
      font-size: 16px;
    }
    .more .read-more, .more .icon-links a i{
      font-size: 18px;
    }
  }
`