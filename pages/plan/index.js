
import Layout from '../../comp/layout';
import TabPlan from '../../comp/Tab';


export default function Plan() {
  return (
    <>
      <Layout>
        <section className="page-header page-header-text-light bg-secondary">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center mb-3">
                <h1>Browse Plans</h1>
              </div>
              <div className="col-lg-8">
                <form id="view-plans" className="search-input-line" method="post">
                  <div className="row">
                  <div className="col-12 col-md">
                      <div className="form-group mb-3 mb-md-0">
                        <input type="text" className="form-control" data-bv-field="number" id="mobileNumber" required="" placeholder="Enter Mobile Number" />
                      </div>
                    </div>
                    <div className="col-12 col-md">
                      <div className="form-group mb-3 mb-md-0">
                        <select className=" form-select custom-select" id="operator" required="">
                          <option value="">Select Your Operator</option>
                          <option>1st Operator</option>
                          <option>2nd Operator</option>
                          <option>3rd Operator</option>
                          <option>4th Operator</option>
                          <option>5th Operator</option>
                          <option>6th Operator</option>
                          <option>7th Operator</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md">
                      <div className="form-group mb-3 mb-md-0">
                        <select className="form-select custom-select" required="">
                          <option value="">Select Your Circle</option>
                          <option>1st Circle</option>
                          <option>2nd Circle</option>
                          <option>3rd Circle</option>
                          <option>4th Circle</option>
                          <option>5th Circle</option>
                          <option>6th Circle</option>
                          <option>7th Circle</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        
        <div id="content">
          <div className="container">
            <div className="bg-white shadow-md rounded p-4">
          
              <div className="row">
                <div className="col-lg-12">
                  <TabPlan/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
