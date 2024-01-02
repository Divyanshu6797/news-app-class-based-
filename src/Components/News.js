import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import newsDefault from './news-default.png'
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {

    static defaultProps = {
        country : "in",
        pageSize :8,
        category : 'general',
        apiKey : "9f5d0153e76c47c08b63c52966f2f681"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        apiKey: PropTypes.string
    }
    
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    constructor(props) {
        super(props);
        this.state = {
            articles : [],
            loading: true,
            page:1,
            totalResults:0
           
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)}- NewsKangaroo`
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({
            loading : true
        });
        let data = await fetch(url);
        let parsedData= await data.json();
        this.setState({articles : parsedData.articles,
             totalResults :parsedData.totalResults,
             loading: false 
            })

    }
   
    fetchMoreData = async () => {
        
          this.setState({
            page : this.state.page +1
            
          });
          const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            
            let data = await fetch(url);
            let parsedData= await data.json();
            this.setState({
                articles : this.state.articles.concat(parsedData.articles),
               
               totalResults: parsedData.totalResults,
                
                
            })
          
       
      };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top HeadLines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="container">
        <div className="row">
            
            {this.state.articles.map((element)=> {
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} source={element.source.name} date={element.publishedAt} description ={element.description?element.description.slice(0,88):""} author={element.author?element.author:"unknown"} imageUrl={element.urlToImage?element.urlToImage:newsDefault} newsUrl={element.url}/>
            </div>
            })}
           
        </div>
        </div>
        </InfiniteScroll>
       
      </div>
    )
  }
}

export default News
