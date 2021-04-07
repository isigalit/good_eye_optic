import img from "./goodEyeLogo.png"

export default function Footer(){
    return (
		
        <div className="flex-d justify-content-bottom">
			<footer className="bd-footer p-3 p-md-5 mt-5 bg-light text-center text-sm-start ">
				<div className="container">
				<img alt="logo" src={img} /> 
					<p className="mb-0">Designed and built by <a href="https://il.linkedin.com/in/sigalit-ivragimov-3278b6141">Sigalit I.</a></p>
				</div>
			</footer>
        </div>
		
	);
    
}