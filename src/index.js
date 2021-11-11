
class CurrencyInputValue extends React.Component{
    render(){
        const{value,handleChange}= this.props;

        return <input value={value} onChange ={handleChange} type="number" />
       }
}


class CurrencyConverter extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            rate:0.89,
            usd:1,
            euro:1 * 0.89,

        };
        this.handleUsdChange = this.handleUsdChange.bind(this);
        this.handleEuroChange = this.handleEuroChange.bind(this);
    }

    toUsd(amount,rate){
        return amount *(1/rate);
    }

    toEuro(amount,rate){
        return amount * rate;
    }

convert(equation,rate,amount){
    const input = parseFloat(amount);

    if (Number.isNaN(input)) {
        this.setState({
          usd: '',
          euro: '',
        });
        return;  // early return
      };
      return equation(input,rate).toFixed(3)
}

    handleUsdChange(e){
        
        const euro = this.convert(this.toEuro,this.state.rate,e.target.value)
        this.setState({
            usd:e.target.value,
            euro
        })

    }

    handleEuroChange(e){
      
      
        const usd = this.convert(this.toUsd,this.state.rate,e.target.value);
        this.setState({
            usd,
            euro:e.target.value
        })
    }

  render(){

    const {rate,usd,euro} = this.state;
      return (
        <div className = "container">
            <h2 className ="currency">Currency Converter</h2>
           <span className="usd">USD </span> 
            <CurrencyInputValue value={usd} handleChange={this.handleUsdChange}/>
            <span>=</span>
            <span className="euro"> Euro </span>
            <CurrencyInputValue value={euro} handleChange={this.handleEuroChange}/>
        </div>

      )
  }

}


ReactDOM.render(
    <CurrencyConverter />,
    document.getElementById('root')
  );
