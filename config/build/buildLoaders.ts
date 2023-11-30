import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export const buildLoaders = ({mode}: BuildOptions): ModuleOptions['rules'] => {

    const isDev = mode === 'development';

    const cssLoaderModule = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]--[hash:base64:4]' : '[hash:base64:8]',
            },
        },
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, cssLoaderModule, "sass-loader"],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        exclude: /node_modules/,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const svgLoader = {
        test: /\.svg$/i,
        use: [{
            loader: '@svgr/webpack', options: {
                icon: true, svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            }
                        }
                    ]
                }
            }
        }],
    };

    return [
        cssLoader,
        tsLoader,
        fileLoader,
        svgLoader
    ]
}