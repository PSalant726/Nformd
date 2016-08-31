const React = require('react');
const SessionStore = require('../../stores/session_store');
const RecommendStore = require('../../stores/recommend_store');
const RecommendActions = require('../../actions/recommend_actions');
const RecentRecommendIndexItem = require('./recent_recommend_index_item');

const RecentRecommendsIndex = React.createClass({
  getInitialState(){
    return({
      recommends: [],
      currentUser: SessionStore.currentUser()
    });
  },

  componentDidMount(){
    this.recommendListener = RecommendStore.addListener(this.getRecommends);
    this.userListener = SessionStore.addListener(this.getCurrentUser);
    RecommendActions.fetchRecommends();
  },

  componentWillUnmount(){
    this.recommendListener.remove();
    this.userListener.remove();
  },

  getRecommends(){
    this.setState({ recommends: RecommendStore.all().slice(0, 6) });
  },

  getCurrentUser(){
    this.setState({ currentUser: SessionStore.currentUser() });
  },

  recentRecommends(){
    let _recommends = this.state.recommends.sort(function(a, b) {
      return new Date(b.created_at) - new Date(a.created_at);
    });

    this.recommendIndexItems = _recommends.map((recommend, i) => {
      return(
        <RecentRecommendIndexItem key={ i } recommend={ recommend } />
      );
    });

    return this.recommendIndexItems;
  },

  render(){
    return(
      <div className="recent-comments-index">
        <h3 className="recent-comments-title">Recent Recommends</h3>
        <h4 className="recent-comments-subtitle">Recommends left most recently</h4>
        { this.recentRecommends() }
      </div>
    );
  }
});

module.exports = RecentRecommendsIndex;
