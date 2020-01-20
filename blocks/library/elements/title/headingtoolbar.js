import PanelSection from '../../../editor/components/panelsection';
import HeadingLevelIcon from './heading-level-icon';

const { range } = lodash;
const { __, sprintf } = wp.i18n;
const { Component } = wp.element;
const { ToolbarGroup } = wp.components;

class HeadingToolbar extends Component {
	createLevelControl( targetLevel, selectedLevel, onChange ) {
		const isActive = targetLevel === selectedLevel;
		return {
			icon: <HeadingLevelIcon level={ targetLevel } isPressed={ isActive } />,
			// translators: %s: heading level e.g: "1", "2", "3"
			title: sprintf( __( 'Heading %d' ), targetLevel ),
			isActive,
			onClick: () => onChange( targetLevel ),
		};
	}

	render() {
		const { isCollapsed = true, minLevel, maxLevel, selectedLevel, onChange } = this.props;

		return ! isCollapsed ? (
			<PanelSection label={ __( 'Level', 'paper-blocks' ) }>
				<ToolbarGroup
					className="paperpress-is-marginless"
					isCollapsed={ isCollapsed }
					icon={ <HeadingLevelIcon level={ selectedLevel } /> }
					controls={ range( minLevel, maxLevel ).map(
						( index ) => this.createLevelControl( index, selectedLevel, onChange )
					) }
				/>
			</PanelSection>
		) :
		(
			<ToolbarGroup
				className="paperpress-is-marginless"
				isCollapsed={ isCollapsed }
				icon={ <HeadingLevelIcon level={ selectedLevel } /> }
				controls={ range( minLevel, maxLevel ).map(
					( index ) => this.createLevelControl( index, selectedLevel, onChange )
				) }
			/>
		)
	}
}

export default HeadingToolbar;
