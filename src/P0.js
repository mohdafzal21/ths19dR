import React, { Component } from 'react';
import fetchPopularRepos from './Api'
const SelectedLanguage = ({selectedLanguage,updateLanguage})=>{
    const languages = [ 'All', 'JavaScript', 'Python', 'Ruby' ];
 return(
        <div style={{display:"flex"}}>
      {languages.map((lang) =>  (
<li key={lang}  onClick={()=>updateLanguage(lang)} style={selectedLanguage==lang ?{color:"#d0021b"}: null}>
            {lang} </li>  ))}
        </div>)}
        
class P0 extends Component {
	state = {
        selectedLanguage: 'All',
        repos: []
    };
    componentDidMount(){
        console.log("iniside didmount")
        this.updateLanguage(this.state.selectedLanguage)
    }
    updateLanguage=(lang)=>{
        console.log('update language method',lang)
        this.setState({
            selectedLanguage: lang,
            repos:[]
        })
        fetchPopularRepos(this.state.selectedLanguage).then((datarepos)=>
         this.setState({
             repos: datarepos
         })
        )

    }
	render() {
        const {selectedLanguage,repos} = this.state
		return( 
        <div>
        <SelectedLanguage updateLanguage={this.updateLanguage} selectedLanguage={selectedLanguage}/>
        { repos.map(({owner,stargazers_count})=>(
            <div >
                <h1>{owner.login}</h1>
                <img src={owner.avatar_url}/>
                <h2>#{stargazers_count}</h2>
                </div>
        ))}
        </div>
        )
	}
}

export default P0;
