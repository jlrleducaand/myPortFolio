import * as PropTypes from 'prop-types'
import { Component } from 'react'

class ProjectCard extends Component {
  render() {
    let { title, description, imageUrl, https } = this.props;
    return (
      <div className='lg:w-1/2 rounded overflow-hidden shadow-lg m-4 lg:m-0 p-4 dark:bg-black'>
        <img
          className='w-full object-cover'
          src={`/images/projects/${imageUrl}.jpg`}
          alt={title}
        />

        <div className='px-6 py-4 dark:bg-black'>
          <div className='font-bold text-xl mb-2 dark:text-white'>{title}</div>
          <p className='text-gray-700 text-base dark:text-white'>
            {description}
          </p>
          {https && (
            <a
              href={https}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              {https}
            </a>
          )}
        </div>
      </div>
    )
  }
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  https: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
}

export default ProjectCard
