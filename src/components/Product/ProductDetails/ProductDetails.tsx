import React from 'react'

import './ProductDetails.scss'
import Button from '@/components/UI/Button/Button'
import { IconLink } from '@/assets/IconLink'
import { IconBox } from '@/assets/IconBox'
import { IconHelp } from '@/assets/IconHelp'
import CircleProgressBar from '@/components/UI/CircleProgressBar/CircleProgressBar'

const ProductDetails = () => {
    return (
        <section className="details">
            <div className="details__progress">
                <div>
                    <h5 className="details__progress-title">Screen Design</h5>
                    <span className="details__progress-bar" />
                </div>
                <div>
                    <h5 className="details__progress-title">Reviewed</h5>
                    <span className="details__progress-bar" />
                </div>
                <div>
                    <h5 className="details__progress-title">Storyboard</h5>
                    <span className="details__progress-bar" />
                </div>
                <div>
                    <h5 className="details__progress-title">Reviewed</h5>
                    <span className="details__progress-bar" />
                </div>
                <div>
                    <h5 className="details__progress-title">Alpha</h5>
                    <span className="details__progress-bar" />
                </div>
                <div>
                    <h5 className="details__progress-title">Reviewed</h5>
                    <span className="details__progress-bar" />
                </div>
                <div>
                    <h5 className="details__progress-title">Gold</h5>
                    <span className="details__progress-bar" />
                </div>
                <div>
                    <h5 className="details__progress-title">Reviewed</h5>
                    <span className="details__progress-bar" />
                </div>
                <div>
                    <h5 className="details__progress-title">Final release</h5>
                    <span className="details__progress-bar" />
                </div>
                <div>
                    <h5 className="details__progress-title">Completed</h5>
                    <span className="details__progress-bar" />
                </div>
            </div>

            <div className="details__info">
                <div className="details__info-actions">
                    <Button className="details__info-actions--button">
                        Latest Link <IconLink />
                    </Button>
                    <Button className="details__info-actions--button">
                        Scorm link <IconBox />
                    </Button>
                    <Button className="details__info-actions--button">
                        Send enquiry <IconHelp />
                    </Button>
                </div>

                <div className="details__info-notes">
                    <h6 className="details__info-notes-title">
                        Latest notes <span>11.10.22</span>
                    </h6>
                    <p className="details__info-notes-description">
                        This project is being reviewed by the clients and needs
                        a subject matter expert to assess etc etc
                    </p>
                </div>

                <div className="details__info-stage">
                    <h3 className="details__info-stage-title">
                        Stage <span>Final Release</span>
                    </h3>

                    <div className="details__info-stage-values">
                        <div className="details__info-stage-dates">
                            <h4 className="details__info-stage-dates--no-bold">
                                Next Mileston
                            </h4>
                            <span className="details__info-stage-dates--bold">
                                01.09.22
                            </span>
                            <h4 className="details__info-stage-dates--no-bold">
                                Est completion
                            </h4>
                            <span className="details__info-stage-dates--bold">
                                01.09.22
                            </span>
                        </div>
                        <CircleProgressBar value={95} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
