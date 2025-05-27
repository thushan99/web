import React from "react"
import { TargetIcon, EyeIcon, CheckCircleIcon } from "lucide-react"
export function ProjectScope() {
  return (
    <section id="project-scope" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Literature Survey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In our literature survey, we examined various academic and technical
            sources related to smart agriculture and tomato cultivation. Key
            studies have explored image processing techniques for identifying
            plant diseases and pests, demonstrating the effectiveness of
            convolutional neural networks (CNNs) like VGG16 and YOLO
            architectures in classifying crop health issues. Additionally, we
            reviewed IoT applications for environmental monitoring and precision
            agriculture, highlighting how sensor data can optimize irrigation,
            fertilization, and pest control. Our survey also covered previous
            work on herbicide recommendations and weed detection using machine
            learning, revealing gaps in comprehensive system integration for
            small-scale farmers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-8 rounded-xl">
            <TargetIcon className="h-12 w-12 text-green-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Research Gap
            </h3>
            <p className="text-gray-700">
              Although many individual technologies—such as disease detection
              models or IoT sensors—have been successfully implemented in
              agricultural research, these solutions often operate in isolation.
              There is a significant gap in creating an integrated,
              user-friendly platform that simultaneously addresses disease
              identification, pest monitoring, weed management, and harvest
              prediction, all tailored for tomato cultivation. Furthermore, many
              existing systems lack real-time data processing capabilities and
              fail to provide actionable insights directly to farmers via mobile
              interfaces. Our research aims to close this gap by combining
              multiple AI models with IoT devices into a unified smart farming
              ecosystem.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl">
            <EyeIcon className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Objectives
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>
                • Accurate Disease & Pest Detection: Train and deploy
                convolutional neural network models to classify major tomato
                diseases and pests using large image datasets.
              </li>
              <li>
                • Environmental Monitoring: Deploy IoT sensors to collect
                real-time data on temperature, humidity, and soil moisture
                critical to crop health.
              </li>
              <li>
                • Harvest Prediction: Develop LSTM-based forecasting models
                using historical and real-time environmental data to predict the
                best harvesting time.
              </li>
              <li>
                • Automated Recommendations: Create intelligent algorithms that
                suggest appropriate fertilizers, pesticides, and herbicides
                based on detected issues and environmental conditions.
              </li>
              <li>
                • User-Centric Mobile Application: Build a user-friendly mobile
                app integrating all features, providing farmers with real-time
                alerts and actionable guidance.
              </li>
            </ul>
          </div>
          <div className="bg-purple-50 p-8 rounded-xl">
            <CheckCircleIcon className="h-12 w-12 text-purple-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Research Problem & Solution
            </h3>
            <ul className="text-gray-700 space-y-2">
              <h4>Research Problem</h4>
              <p>
                Tomato farmers frequently struggle with timely identification of
                diseases and pests, leading to overuse or misuse of fertilizers
                and pesticides. Additionally, predicting the right harvest time
                remains challenging without continuous monitoring of crop
                conditions and environmental factors. These issues result in
                decreased yields, increased costs, and environmental harm.
              </p>

              <h4>Proposed Solution</h4>
              <p>
                Our project offers a comprehensive solution that leverages image
                processing models to automatically identify diseases and pests
                from images, while IoT sensors continuously monitor
                environmental parameters such as temperature, humidity, and soil
                moisture. Machine learning forecasting models predict disease
                outbreaks and optimal harvesting periods. The system provides
                farmers with precise fertilizer and pesticide recommendations
                via a mobile app, enabling smarter, data-driven decisions that
                improve productivity and sustainability.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
