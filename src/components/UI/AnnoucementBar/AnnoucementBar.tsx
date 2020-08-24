import React from "react";
import styled from "@emotion/styled";
import { vars, mixin } from "../../../styles";
import { ReactRouterLinkButtonSolidOrangeWhite } from "./../../UI/Button";

export interface AnnoucementBarProps {
  className?: string;
}


export const AnnoucementBarUnStyled = ({ className }: AnnoucementBarProps) => {
  return (
    <section className={`${className} bg-brand-navy text-white`}>
      <div className="container-custom">
        <div className="row">
          <div className="col-12">
            <div className="announcement-bar">
              <div className="row align-items-center">
                <div className="col">
                  <div className="profileinfo">
                  <img
                    src="/static/images/icons/negotiatingbank.png"
                  /> <span>Negotiating Bank</span>
                    </div>

                </div>

          

              </div>



              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export const AnnoucementBar = styled(AnnoucementBarUnStyled)`
  padding-top: 15px;
  padding-bottom: 15px;

  .announcement-bar {
    position: relative;
    background-color: #f6d4ff;
    border-radius: 4px;
    background-repeat: no-repeat;
    padding-top: 15px;
    padding-bottom: 15px;

    background-position: 55% 63%;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 26pt;
    color: #000000;
    font-weight: 600;

    @media only screen and (min-width: ${vars.lg}) {
      background-position: 50% 68%;
      padding-left: 50px;
      padding-right: 50px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .announcement-bar img {
    max-width: 150px;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 75px;
    margin-right: 30px;
  }

  .banner-title {
    width: 100%;
    max-width: 250px;
  }

  .profileinfo {
    width: 50%;
    float:left;
  }
  
  .dropdown {
    float:right;
    padding: 10px;
  }

  .dropdown-content {
    display:none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    z-index:1;
  }
  .show {
    display:block;
  }

  a {
    padding: 8px 24px 12px;
    ${mixin.fontSize(26)};

    &:hover {
      color: ${vars.greyLightest};
    }
  }
`;
