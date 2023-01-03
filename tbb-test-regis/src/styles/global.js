import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{

    /* Colors */
    --white:#FFFFFF;
    --blue: #389CD6;
    --dark-gray: #7B7070;
    --light-gray: #00000014;
    --green: #309D5F;
    --pink: #EE6381;

    /* Font info*/
    --font-family: Trebuchet MS;

    /* Title */
    --title-font-weight: bold;
    --title-font-size: 39px;
    --title-font-color: var(--blue);
    --title-spacing-character: 0.78px;
    --title-line-spacing: 50px;

    /* Text */
    --text-font-weight: normal; 
    --text-font-size: 20px;
    --text-spacing-character: 0.4px;
    --text-line-spacing: 28px;
    --text-font-color: var(--dark-gray);

    /* Card Button text */
    --card-btn-font-weight: bold; 
    --card-btn-font-size: 25px;
    --card-btn-spacing-character: 0.5px;
    --card-btn-line-spacing: 36px;
    --card-btn-font-color: var(--white);
    --card-btn-text-form: lowercase;

    /* Button text */
    --btn-font-weight: bold; 
    --btn-font-size: 20px;
    --btn-spacing-character: 0.4px;
    --btn-line-spacing: 28px;
    --btn-font-color: var(--white);
    --btn-text-form: lowercase;

    /* Nav text */
    --nav-font-weight: normal; 
    --nav-font-size: 16px;
    --nav-spacing-character: 0.32px;
    --nav-line-spacing: 22px;
    --nav-font-color: var(--white);

    /* Mobile Title */
    --mobile-title-font-weight: bold;
    --mobile-title-font-size: 31px;
    --mobile-title-font-color: var(--blue);
    --mobile-title-spacing-character: 0.62px;
    --mobile-title-line-spacing: 40px;
    
    /* Mobile Text */
    --mobile-text-font-weight: normal; 
    --mobile-text-font-size: 16px;
    --mobile-text-spacing-character: 0.32px;
    --mobile-text-line-spacing: 22px;
    --mobile-text-font-color: var(--dark-gray);
}

h2{
    font-weight: var(--title-font-weight);
    font-size: var(--title-font-size);
    color: var(--title-font-color);
    letter-spacing: var(--title-spacing-character);
    line-height: var(--title-line-spacing);
}

p{
    font-weight: var(--text-font-weight);
    font-size: var(--text-font-size);
    color: var(--text-font-color);
    letter-spacing: var(--text-spacing-character);
    line-height: var(--text-line-spacing);
}

h3{
    font-weight: var(--card-btn-font-weight);
    font-size: var(--card-btn-font-size);
    color: var(--card-btn-font-color);
    letter-spacing: var(--card-btn-spacing-character);
    line-height: var(--card-btn-line-spacing);
    text-transform: var(--card-btn-text-form);
}

h4{
    font-weight: var(--btn-font-weight);
    font-size: var(--btn-font-size);
    color: var(--btn-font-color);
    letter-spacing: var(--btn-spacing-character);
    line-height: var(--btn-line-spacing);
    text-transform: var(--btn-text-form);
}

li{
    font-weight: var(--nav-font-weight);
    font-size: var(--nav-font-size);
    color: var(--nav-font-color);
    letter-spacing: var(--nav-spacing-character);
    line-height: var(--nav-line-spacing);
    list-style: none;
}

li:hover{
    cursor: pointer;
}

html,
body {
    width: 100%;
    min-height: 100vh;
}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: var(--font-family);
}

@media (max-width: 768px){
    h2{
        font-weight: var(--mobile-title-font-weight);
        font-size: var(--mobile-title-font-size);
        color: var(--mobile-title-font-color);
        letter-spacing: var(--mobile-title-spacing-character);
        line-height: var(--mobile-title-line-spacing);
    }

    p{
        font-weight: var(--mobile-text-font-weight);
        font-size: var(--mobile-text-font-size);
        color: var(--mobile-text-font-color);
        letter-spacing: var(--mobile-text-spacing-character);
        line-height: var(--mobile-text-line-spacing);
    }
}
`;
